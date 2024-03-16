import React, { useState } from "react";
import logo from "../logo.jpeg";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
function Admin() {
  const [dummyData, setDummyData] = useState({
    toBeCollected: [
      {
        id: 1,
        quantity: 5,
        user_id: "123",
        user_name: "John Doe",
        address: "123 Main St",
        food_detail: "Vegetables",
        expected_person_can_eat: 2,
        Expiry_date: "2024-04-01",
        vegetarian: true,
        Additional_instruction: "None",
      },
      {
        id: 2,
        quantity: 3,
        user_id: "456",
        user_name: "Jane Smith",
        address: "456 Elm St",
        food_detail: "Fruits",
        expected_person_can_eat: 3,
        Expiry_date: "2024-03-20",
        vegetarian: false,
        Additional_instruction: "Please handle with care",
      },
      {
        id: 3,
        quantity: 7,
        user_id: "789",
        user_name: "Bob Johnson",
        address: "789 Oak St",
        food_detail: "Grains",
        expected_person_can_eat: 4,
        Expiry_date: "2024-03-25",
        vegetarian: true,
        Additional_instruction: "Allergic to nuts",
      },
    ],
    storedFood: [
      {
        id: 1,
        food_detail: "Vegetables",
        quantity: 10,
        expected_person_can_eat: 2,
        Expiry_date: "2024-04-01",
        vegetarian: true,
        Additional_instruction: "None",
      },
      {
        id: 2,
        food_detail: "Vegetables",
        quantity: 15,
        expected_person_can_eat: 3,
        Expiry_date: "2024-03-20",
        vegetarian: false,
        Additional_instruction: "Please handle with care",
      },
      {
        id: 3,
        food_detail: "Vegetables",
        quantity: 20,
        expected_person_can_eat: 4,
        Expiry_date: "2024-03-25",
        vegetarian: true,
        Additional_instruction: "Allergic to nuts",
      },
    ],
    wasteFood: [
      {
        id: 1,
        food_detail: "Vegetables",
        quantity: 2,
        expected_person_can_eat: 1,
        Expiry_date: "2024-03-10",
        vegetarian: true,
        reason: "Expired",
      },
      {
        id: 2,
        food_detail: "Vegetables",
        quantity: 4,
        expected_person_can_eat: 2,
        Expiry_date: "2024-03-15",
        vegetarian: false,
        reason: "Damaged packaging",
      },
      {
        id: 3,
        food_detail: "Vegetables",
        quantity: 6,
        expected_person_can_eat: 3,
        Expiry_date: "2024-03-20",
        vegetarian: true,
        reason: "Spoiled",
      },
    ],
    donatedFood: [
      {
        id: 1,
        food_detail: "Donated Item 1",
        quantity: 8,
        person: "Organization A",
      },
      {
        id: 2,
        food_detail: "Donated Item 2",
        quantity: 12,
        person: "Organization B",
      },
      {
        id: 3,
        food_detail: "Donated Item 3",
        quantity: 18,
        person: "Organization C",
      },
    ],
    user: [
      {
        id: 1,
        user_id: 1,
        user_name: "John Doe",
        address: "123 Main St",
        area: "Area A",
        email: "johndoe@example.com",
        password: "password123",
        mobile_no: "1234567890",
      },
      {
        id: 2,
        user_id: 2,
        user_name: "Jane Smith",
        address: "456 Elm St",
        area: "Area B",
        email: "janesmith@example.com",
        password: "password456",
        mobile_no: "0987654321",
      },
      {
        id: 3,
        user_id: 3,
        user_name: "Bob Johnson",
        address: "789 Oak St",
        area: "Area C",
        email: "bobjohnson@example.com",
        password: "password789",
        mobile_no: "1357924680",
      },
    ],
    ngo: [
      {
        id: 1,
        name: "NGO A",
        address: "123 NGO St",
        area: "Area x",
        email: "ngoA@example.com",
        password: "ngopassword123",
        mobile_no: "9876543210",
        executive_director_name: "Alice",
        valid_id_proof: "ID123",
      },
      {
        id: 2,
        name: "NGO B",
        address: "456 NGO St",
        area: "Area y",
        email: "ngoB@example.com",
        password: "ngopassword456",
        mobile_no: "1234567890",
        executive_director_name: "Bob",
        valid_id_proof: "ID456",
      },
      {
        id: 3,
        name: "NGO C",
        address: "789 NGO St",
        area: "Area z",
        email: "ngoC@example.com",
        password: "ngopassword789",
        mobile_no: "9876543210",
        executive_director_name: "Charlie",
        valid_id_proof: "ID789",
      },
    ],
    needyUser: [
      {
        id: 1,
        user_id: 1,
        user_name: "Needy User 1",
        address: "123 Needy St",
        area: "Area P",
        email: "needyuser1@example.com",
        password: "needyuserpassword1",
        mobile_no: "1112223333",
        income_proof: "Proof1",
        valid_id_proof: "IDProof1",
      },
      {
        id: 2,
        user_id: 2,
        user_name: "Needy User 2",
        address: "456 Needy St",
        area: "Area Q",
        email: "needyuser2@example.com",
        password: "needyuserpassword2",
        mobile_no: "2223334444",
        income_proof: "Proof2",
        valid_id_proof: "IDProof2",
      },
      {
        id: 3,
        user_id: 3,
        user_name: "Needy User 3",
        address: "789 Needy St",
        area: "Area R",
        email: "needyuser3@example.com",
        password: "needyuserpassword3",
        mobile_no: "3334445555",
        income_proof: "Proof3",
        valid_id_proof: "IDProof3",
      },
    ],
    pastDonation: [
      {
        id: 1,
        user_id: 1,
        user_name: "John Doe",
        food_detail: "Vegetables",
        quantity: 5,
        expected_person_can_eat: 2,
        Expiry_date: "2024-04-01",
        vegetarian: true,
        Additional_instruction: "None",
      },
      {
        id: 2,
        user_id: 2,
        user_name: "Jane Smith",
        food_detail: "Fruits",
        quantity: 3,
        expected_person_can_eat: 3,
        Expiry_date: "2024-03-20",
        vegetarian: false,
        Additional_instruction: "Please handle with care",
      },
      {
        id: 3,
        user_id: 3,
        user_name: "Bob Johnson",
        food_detail: "Grains",
        quantity: 7,
        expected_person_can_eat: 4,
        Expiry_date: "2024-03-25",
        vegetarian: true,
        Additional_instruction: "Allergic to nuts",
      },
    ],
  });

  const [selectedOption, setSelectedOption] = useState("toBeCollected");
  const [reason, setReason] = useState("");
  const [showReasonPopup, setShowReasonPopup] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [error, setError] = useState("");
  const [editingItem, setEditingItem] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleEdit = (itemId) => {
    const itemToEdit = dummyData[selectedOption].find(
      (item) => item.id === itemId
    );
    setEditingItem(itemToEdit);
    setShowEditModal(true);
  };

  const handleSaveEdit = () => {
    const updatedData = { ...dummyData };
    updatedData[selectedOption] = dummyData[selectedOption].map((item) => {
      if (item.id === editingItem.id) {
        return editingItem;
      }
      return item;
    });
    setDummyData(updatedData);
    setShowEditModal(false);
  };

  const handleEditNgo = (id) => {
    const itemToEdit = dummyData[selectedOption].find((item) => item.id === id);
    setEditingItem(itemToEdit);
    setShowEditModal(true);
  };

  const handleCancelEdit = () => {
    setShowEditModal(false);
  };

  const handleDelete = (itemId) => {
    console.log("Deleting item with ID:", itemId);
    const updatedData = { ...dummyData };
    updatedData[selectedOption] = dummyData[selectedOption].filter(
      (item) => item.id !== itemId
    );
    setDummyData(updatedData);
  };

  const handleSotoredFood = () => {};

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handleAddToWasteFood = (itemId) => {
    setSelectedItemId(itemId);
    setShowReasonPopup(true);
  };

  const handleReasonSubmit = () => {
    if (reason.trim() === "") {
      setError("Please enter a reason.");
      return;
    }
    handleEdit(selectedItemId, reason);
    setShowReasonPopup(false);
    setReason("");
    setError("");
  };

  const handleDonate = (itemId) => {
    console.log("Going for donation for item with ID:", itemId);
    // Add your logic here to handle donation
  };

  return (
    <>
      <Navbar bg="secondary" variant="dark" expand="lg" className=" ">
        <Navbar.Brand as={Link} to="/homepage" className="mr-auto pl-5">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top mx-3"
            alt="Logo"
          />
          ShareMeal
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto"></Nav>
        </Navbar.Collapse>

        <Nav.Link
          as={Link}
          to="/"
          className="btn btn-danger btn-lg text-white mx-3"
        >
          Logout
        </Nav.Link>
      </Navbar>
      <div className="container-fluid">
        <div
          className="btn-group my-3"
          style={{ width: "100%" }}
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="tobecollected"
            value="toBeCollected"
            checked={selectedOption === "toBeCollected"}
            onChange={handleRadioChange}
          />
          <label className="btn btn-outline-primary" htmlFor="tobecollected">
            To Be Collected
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="storedfood"
            value="storedFood"
            checked={selectedOption === "storedFood"}
            onChange={handleRadioChange}
          />
          <label className="btn btn-outline-primary" htmlFor="storedfood">
            Stored Food
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="wastefood"
            value="wasteFood"
            checked={selectedOption === "wasteFood"}
            onChange={handleRadioChange}
          />
          <label className="btn btn-outline-primary" htmlFor="wastefood">
            Waste Food
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="donatedfood"
            value="donatedFood"
            checked={selectedOption === "donatedFood"}
            onChange={handleRadioChange}
          />
          <label className="btn btn-outline-primary" htmlFor="donatedfood">
            Donated Food
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="user"
            value="user"
            checked={selectedOption === "user"}
            onChange={handleRadioChange}
          />
          <label className="btn btn-outline-primary" htmlFor="user">
            User
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="ngo"
            value="ngo"
            checked={selectedOption === "ngo"}
            onChange={handleRadioChange}
          />
          <label className="btn btn-outline-primary" htmlFor="ngo">
            NGO
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="needyuser"
            value="needyUser"
            checked={selectedOption === "needyUser"}
            onChange={handleRadioChange}
          />
          <label className="btn btn-outline-primary" htmlFor="needyuser">
            Needy User
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="pastdonation"
            value="pastDonation"
            checked={selectedOption === "pastDonation"}
            onChange={handleRadioChange}
          />
          <label className="btn btn-outline-primary" htmlFor="pastdonation">
            Past Donation
          </label>
        </div>

        <div className="table-responsive">
          {selectedOption === "toBeCollected" && (
            <table className="table mt-3">
              <thead>
                <tr>
                  <th>NO.</th>
                  <th>User Name</th>
                  <th>Address</th>
                  <th>Food Detail</th>
                  <th>Quantity</th>
                  <th>Expected Person Can Eat</th>
                  <th>Expiry Date</th>
                  <th>Vegetarian</th>
                  <th>Additional Instruction</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {dummyData[selectedOption].map((item) => (
                  <tr key={item.id}>
                    <td>{item.user_id}</td>
                    <td>{item.user_name}</td>
                    <td>{item.address}</td>
                    <td>{item.food_detail}</td>
                    <td>{item.quantity}</td>
                    <td>{item.expected_person_can_eat}</td>
                    <td>{item.Expiry_date}</td>
                    <td>{item.vegetarian ? "Yes" : "No"}</td>
                    <td>{item.Additional_instruction}</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm mx-1"
                        onClick={() => handleSotoredFood(item.id)}
                      >
                        Add To Stored Food
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleAddToWasteFood(item.id)}
                      >
                        Add To Waste Food
                      </button>
                      <button
                        className="btn btn-secondary btn-sm mx-1"
                        onClick={() => handleEdit(item.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm "
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {showEditModal && selectedOption === "toBeCollected" && (
          <div
            className="modal"
            style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit Item</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCancelEdit}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="foodDetail" className="form-label">
                        Food Detail
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="foodDetail"
                        value={editingItem.food_detail}
                        onChange={(e) =>
                          setEditingItem({
                            ...editingItem,
                            food_detail: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="quantity" className="form-label">
                        Quantity
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="quantity"
                        value={editingItem.quantity}
                        onChange={(e) =>
                          setEditingItem({
                            ...editingItem,
                            quantity: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label
                        htmlFor="expectedPersonCanEat"
                        className="form-label"
                      >
                        Expected Person Can Eat
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="expectedPersonCanEat"
                        value={editingItem.expected_person_can_eat}
                        onChange={(e) =>
                          setEditingItem({
                            ...editingItem,
                            expected_person_can_eat: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="expiryDate" className="form-label">
                        Expiry Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="expiryDate"
                        value={editingItem.Expiry_date}
                        onChange={(e) =>
                          setEditingItem({
                            ...editingItem,
                            Expiry_date: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="vegetarian" className="form-label">
                        Vegetarian
                      </label>
                      <select
                        id="vegetarian"
                        className="form-select"
                        value={editingItem.vegetarian}
                        onChange={(e) =>
                          setEditingItem({
                            ...editingItem,
                            vegetarian: e.target.value === "true",
                          })
                        }
                      >
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label
                        htmlFor="additionalInstruction"
                        className="form-label"
                      >
                        Additional Instruction
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="additionalInstruction"
                        value={editingItem.Additional_instruction}
                        onChange={(e) =>
                          setEditingItem({
                            ...editingItem,
                            Additional_instruction: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSaveEdit}
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleCancelEdit}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {showReasonPopup && (
          <div
            className="modal"
            style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Enter Reason</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={() => setShowReasonPopup(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <input
                    type="text"
                    className="form-control"
                    value={reason}
                    onChange={handleReasonChange}
                    placeholder="Enter Reason"
                  />
                  {error && <div className="text-danger">{error}</div>}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleReasonSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedOption === "storedFood" && (
          <div className="table-responsive">
            <table className="table mt-3">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Food Details</th>
                  <th>Quantity</th>
                  <th>Expected Per Person</th>
                  <th>Expiry Date</th>
                  <th>Vegetarian</th>
                  <th>Other Instructions</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {dummyData[selectedOption].map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.food_detail}</td>
                    <td>{item.quantity}</td>
                    <td>{item.expected_person_can_eat}</td>
                    <td>{item.Expiry_date}</td>
                    <td>{item.vegetarian ? "Yes" : "No"}</td>
                    <td>{item.Additional_instruction}</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm mx-2"
                        onClick={() => handleDonate(item.id)}
                      >
                        Go For Donate
                      </button>
                      <button
                        className="btn btn-danger btn-sm mx-2"
                        onClick={() => handleAddToWasteFood(item.id)}
                      >
                        Add To Waste Food
                      </button>
                      <button
                        className="btn btn-secondary btn-sm mx-2"
                        onClick={() => handleEdit(item.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {showEditModal && selectedOption === "storedFood" && (
          <div
            className="modal"
            style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit Item</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCancelEdit}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="foodDetail" className="form-label">
                        Food Detail
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="foodDetail"
                        value={editingItem.food_detail}
                        onChange={(e) =>
                          setEditingItem({
                            ...editingItem,
                            food_detail: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="quantity" className="form-label">
                        Quantity
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="quantity"
                        value={editingItem.quantity}
                        onChange={(e) =>
                          setEditingItem({
                            ...editingItem,
                            quantity: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label
                        htmlFor="expectedPersonCanEat"
                        className="form-label"
                      >
                        Expected Person Can Eat
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="expectedPersonCanEat"
                        value={editingItem.expected_person_can_eat}
                        onChange={(e) =>
                          setEditingItem({
                            ...editingItem,
                            expected_person_can_eat: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="expiryDate" className="form-label">
                        Expiry Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="expiryDate"
                        value={editingItem.Expiry_date}
                        onChange={(e) =>
                          setEditingItem({
                            ...editingItem,
                            Expiry_date: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="vegetarian" className="form-label">
                        Vegetarian
                      </label>
                      <select
                        id="vegetarian"
                        className="form-select"
                        value={editingItem.vegetarian}
                        onChange={(e) =>
                          setEditingItem({
                            ...editingItem,
                            vegetarian: e.target.value,
                          })
                        }
                      >
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label
                        htmlFor="additionalInstruction"
                        className="form-label"
                      >
                        Additional Instruction
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="additionalInstruction"
                        value={editingItem.Additional_instruction}
                        onChange={(e) =>
                          setEditingItem({
                            ...editingItem,
                            Additional_instruction: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSaveEdit}
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleCancelEdit}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {showReasonPopup && (
          <div
            className="modal"
            style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Enter Reason</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={() => setShowReasonPopup(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <input
                    type="text"
                    className="form-control"
                    value={reason}
                    onChange={handleReasonChange}
                    placeholder="Enter Reason"
                  />
                  {error && <div className="text-danger">{error}</div>}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleReasonSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedOption === "wasteFood" && (
          <div className="table-responsive">
            <table className="table mt-3">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Food Details</th>
                  <th>Quantity</th>
                  <th>Expected Per Person</th>
                  <th>Expiry Date</th>
                  <th>Vegetarian</th>
                  <th>Reason</th>
                </tr>
              </thead>
              <tbody>
                {dummyData[selectedOption].map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.food_detail}</td>
                    <td>{item.quantity}</td>
                    <td>{item.expected_person_can_eat}</td>
                    <td>{item.Expiry_date}</td>
                    <td>{item.vegetarian ? "Yes" : "No"}</td>
                    <td>{item.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {selectedOption === "donatedFood" && (
          <div className="table-responsive">
            <table className="table mt-3">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Food Details</th>
                  <th>Quantity</th>
                  <th>Person</th>
                </tr>
              </thead>
              <tbody>
                {dummyData[selectedOption].map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.food_detail}</td>
                    <td>{item.quantity}</td>
                    <td>{item.person}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {selectedOption === "user" && (
          <div className="table-responsive">
            <table className="table mt-3">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>User Name</th>
                  <th>Address</th>
                  <th>Area</th>
                  <th>Email</th>
                  <th>Mobile Number</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {dummyData[selectedOption].map((user) => (
                  <tr key={user.user_id}>
                    <td>{user.user_id}</td>
                    <td>{user.user_name}</td>
                    <td>{user.address}</td>
                    <td>{user.area}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile_no}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {selectedOption === "ngo" && (
          <div className="table-responsive">
            <table className="table mt-3">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Area</th>
                  <th>Email</th>
                  <th>Mobile Number</th>
                  <th>Executive Director Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {dummyData[selectedOption].map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.area}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile_no}</td>
                    <td>{item.executive_director_name}</td>
                    <td>
                      <button
                        className="btn btn-secondary btn-sm mx-2"
                        onClick={() => handleEditNgo(item.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {showEditModal && selectedOption === "ngo" && (
          <div
            className="modal"
            style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit NGO</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCancelEdit}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="row mb-3">
                    <div className="col">
                      <label htmlFor="name" className="form-label">
                        Name:
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        value={editingItem.name}
                        onChange={(e) =>
                          setEditingItem({
                            ...editingItem,
                            name: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="address" className="form-label">
                        Address:
                      </label>
                      <input
                        type="text"
                        id="address"
                        className="form-control"
                        value={editingItem.address}
                        onChange={(e) =>
                          setEditingItem({
                            ...editingItem,
                            address: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col">
                      <label htmlFor="area" className="form-label">
                        Area:
                      </label>
                      <input
                        type="text"
                        id="area"
                        className="form-control"
                        value={editingItem.area}
                        onChange={(e) =>
                          setEditingItem({
                            ...editingItem,
                            area: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="email" className="form-label">
                        Email:
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        value={editingItem.email}
                        onChange={(e) =>
                          setEditingItem({
                            ...editingItem,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col">
                      <label htmlFor="mobileNumber" className="form-label">
                        Mobile Number:
                      </label>
                      <input
                        type="text"
                        id="mobileNumber"
                        className="form-control"
                        value={editingItem.mobile_no}
                        onChange={(e) =>
                          setEditingItem({
                            ...editingItem,
                            mobile_no: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="col">
                      <label
                        htmlFor="executiveDirectorName"
                        className="form-label"
                      >
                        Executive Director Name:
                      </label>
                      <input
                        type="text"
                        id="executiveDirectorName"
                        className="form-control"
                        value={editingItem.executive_director_name}
                        onChange={(e) =>
                          setEditingItem({
                            ...editingItem,
                            executive_director_name: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSaveEdit}
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleCancelEdit}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedOption === "needyUser" && (
          <div className="table-responsive">
            <table className="table mt-3">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>User Name</th>
                  <th>Address</th>
                  <th>Area</th>
                  <th>Email</th>
                  <th>Mobile Number</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {dummyData[selectedOption].map((user) => (
                  <tr key={user.user_id}>
                    <td>{user.user_id}</td>
                    <td>{user.user_name}</td>
                    <td>{user.address}</td>
                    <td>{user.area}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile_no}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {selectedOption === "pastDonation" && (
          <div className="table-responsive">
            <table className="table mt-3">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>User Name</th>
                  <th>Food Details</th>
                  <th>Quantity</th>
                  <th>Expected Per Person</th>
                  <th>Expiry Date</th>
                  <th>Vegetarian</th>
                  <th>Other Instructions</th>
                </tr>
              </thead>
              <tbody>
                {dummyData[selectedOption].map((item) => (
                  <tr key={item.id}>
                    <td>{item.user_id}</td>
                    <td>{item.user_name}</td>
                    <td>{item.food_detail}</td>
                    <td>{item.quantity}</td>
                    <td>{item.expected_person_can_eat}</td>
                    <td>{item.Expiry_date}</td>
                    <td>{item.vegetarian ? "Yes" : "No"}</td>
                    <td>{item.Additional_instruction}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

export default Admin;
