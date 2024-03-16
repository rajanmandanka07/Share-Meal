const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();
const PORT = 5000;

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/sharemeal", {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Define the schema for NGO details
const ngoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  selectedArea: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  executiveDirectorName: {
    type: String,
    required: true,
  },
  validIdProof: {
    type: String,
    required: true,
  },
  jwtToken: {
    type: String,
    default: null,
  },
});

// Define the model for NGO
const NgoModel = mongoose.model("NgoDetails", ngoSchema);

// Define the schema for user details
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  selectedArea: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  jwtToken: {
    type: String,
    default: null,
  },
});

// Define the model for user
const UserModel = mongoose.model("UserDetails", userSchema);

// Middleware
app.use(cors());
app.use(bodyParser.json());

const foodDonationSchema = new mongoose.Schema({
    foodDetails: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    expectedPersons: {
      type: Number,
      required: true,
    },
    expiryDate: {
      type: Date,
      required: true,
    },
    vegetarian: {
      type: Boolean,
      required: true,
    },
    instructions: {
      type: String,
      default: "",
    },
    // Additional user-specific properties
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  });
  
  const FoodDonationModel = mongoose.model("tobecollecteds", foodDonationSchema);
  
  app.post("/ngoconfirmation", async (req, res) => {
    const { name, address, foodDetails, quantity, expectedPersons, expiryDate, vegetarian, instructions } = req.body;
    try {
      const foodDonation = new FoodDonationModel({ name, address, foodDetails, quantity, expectedPersons, expiryDate, vegetarian, instructions });
      await foodDonation.save();
      res.status(201).json({ message: "Food donation details saved successfully" });
    } catch (error) {
      console.error("Error saving food donation details:", error);
      res.status(500).json({ error: "An error occurred while saving food donation details" });
    }
});

    


const jwtSecret = "your_jwt_secret";


app.post('/signup', async (req, res) => {
    const { name, email, password, selectedArea, phoneNumber, address, userType } = req.body;
    try {
      // Check if user already exists
      const existingUser = await UserModel.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'User with this email already exists' });
      }
  
      // Hash the password
      //const hashedPassword = await bcrypt.hash(password, 10);
  
      // Save user or NGO to database based on userType
      let newUser;
      if (userType === 'user') {
        newUser = new UserModel({ name, email, password, selectedArea, phoneNumber, address });
      } else if (userType === 'ngo') {
        newUser = new NgoModel({ name, email, password, selectedArea, phoneNumber, address });
      }
       else {
        return res.status(400).json({ error: 'Invalid user type' });
      }
  
      await newUser.save();
      res.status(201).json({ message: 'Registration completed successfully' });
    } catch (error) {
      console.error('Error signing up user:', error);
      res.status(500).json({ error: 'An error occurred while signing up' });
    }
  });

// Route to handle user login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      try {
        const user1 = await NgoModel.findOne({ email });
        if (!user1) {
          if(user.email==='admin@gmail.com' && user.password==='password')
          {
            res.status(202).json({ address:user.address,name:user.name});
          }
        }
    
        const isPasswordValid = (password===user1.password)
        if (!isPasswordValid) {
          return res.status(401).json({ error: "Invalid email or password" });
        }
    
        // const token = jwt.sign({ userId: user._id }, jwtSecret);
        // user.jwtToken = token;
        await user1.save();
    
        res.status(203).json({ address:user1.address,name:user1.name});
      } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ error: "An error occurred while logging in" });
      }
    }

    const isPasswordValid = (password===user.password)
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // const token = jwt.sign({ userId: user._id }, jwtSecret);
    // user.jwtToken = token;
    await user.save();

    res.status(200).json({ address:user.address,name:user.name});
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ error: "An error occurred while logging in" });
  }
});

// Route to handle user logout
// app.post('/logout', (req, res) => {
//     // Assuming you're using a client-side token storage like localStorage
//     localStorage.removeItem('jwtToken');
//     res.json({ message: 'Logout successful' });
//   });

// Middleware to authenticate JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    req.userId = decoded.userId;
    next();
  });
};

// Example protected route
app.get("/protected-route", verifyToken, (req, res) => {
  // If the token is valid, the user is authorized
  res.status(200).json({ message: "Authorized" });
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
