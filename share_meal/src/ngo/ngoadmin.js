import React, { useState } from 'react';
import NgoApply from './ngoapply'

function NgoAdmin() {
    const [dummyData, setDummyData] = useState({
        toBeCollected: [
            { id: 1, quantity: 5, user_id: '123', user_name: 'John Doe', address: '123 Main St', food_detail: 'Vegetables', expected_person_can_eat: 2, Expiry_date: '2024-04-01', vegetarian: true, Additional_instruction: 'None' },
            { id: 2, quantity: 3, user_id: '456', user_name: 'Jane Smith', address: '456 Elm St', food_detail: 'Fruits', expected_person_can_eat: 3, Expiry_date: '2024-03-20', vegetarian: false, Additional_instruction: 'Please handle with care' },
            { id: 3, quantity: 7, user_id: '789', user_name: 'Bob Johnson', address: '789 Oak St', food_detail: 'Grains', expected_person_can_eat: 4, Expiry_date: '2024-03-25', vegetarian: true, Additional_instruction: 'Allergic to nuts' }
        ],
        storedFood: [
            { id: 1, food_detail: 'Vegetables', quantity: 10, expected_person_can_eat: 2, Expiry_date: '2024-04-01', vegetarian: true, Additional_instruction: 'None' },
            { id: 2, food_detail: 'Vegetables', quantity: 15, expected_person_can_eat: 3, Expiry_date: '2024-03-20', vegetarian: false, Additional_instruction: 'Please handle with care' },
            { id: 3, food_detail: 'Vegetables', quantity: 20, expected_person_can_eat: 4, Expiry_date: '2024-03-25', vegetarian: true, Additional_instruction: 'Allergic to nuts' }
        ],
        wasteFood: [
            { id: 1, food_detail: 'Vegetables', quantity: 2, expected_person_can_eat: 1, Expiry_date: '2024-03-10', vegetarian: true, reason: 'Expired' },
            { id: 2, food_detail: 'Vegetables', quantity: 4, expected_person_can_eat: 2, Expiry_date: '2024-03-15', vegetarian: false, reason: 'Damaged packaging' },
            { id: 3, food_detail: 'Vegetables', quantity: 6, expected_person_can_eat: 3, Expiry_date: '2024-03-20', vegetarian: true, reason: 'Spoiled' }
        ],
        donatedFood: [
            { id: 1, food_detail: 'Donated Item 1', quantity: 8, person: 'Organization A' },
            { id: 2, food_detail: 'Donated Item 2', quantity: 12, person: 'Organization B' },
            { id: 3, food_detail: 'Donated Item 3', quantity: 18, person: 'Organization C' }
        ]
    });

    const [selectedOption, setSelectedOption] = useState('toBeCollected');
    const [reason, setReason] = useState('');
    const [showReasonPopup, setShowReasonPopup] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [error, setError] = useState('');
    const [editingItem, setEditingItem] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);

    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleStoreFood = () => {};

    const handleEdit = (itemId) => {
        const itemToEdit = dummyData[selectedOption].find(item => item.id === itemId);
        setEditingItem(itemToEdit);
        setShowEditModal(true);
    };

    const handleSaveEdit = () => {
        const updatedData = { ...dummyData };
        updatedData[selectedOption] = dummyData[selectedOption].map(item => {
            if (item.id === editingItem.id) {
                return editingItem;
            }
            return item;
        });
        setDummyData(updatedData);
        setShowEditModal(false);
    };

    const handleCancelEdit = () => {
        setShowEditModal(false);
    };

    const handleDelete = (itemId) => {
        console.log("Deleting item with ID:", itemId);
        const updatedData = { ...dummyData };
        updatedData[selectedOption] = dummyData[selectedOption].filter(item => item.id !== itemId);
        setDummyData(updatedData);
    };

    const handleReasonChange = (event) => {
        setReason(event.target.value);
    };

    const handleAddToWasteFood = (itemId) => {
        setSelectedItemId(itemId);
        setShowReasonPopup(true);
    };

    const handleReasonSubmit = () => {
        if (reason.trim() === '') {
            setError('Please enter a reason.');
            return;
        }
        handleEdit(selectedItemId, reason);
        setShowReasonPopup(false);
        setReason('');
        setError('');
    };

    const handleDonate = (itemId) => {
        console.log("Going for donation for item with ID:", itemId);
        // Add your logic here to handle donation
    };

    return (
        <div>
            <div className="btn-group my-3" style={{ width: '100%' }} role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="tobecollected" value="toBeCollected" checked={selectedOption === 'toBeCollected'} onChange={handleRadioChange} />
                <label className="btn btn-outline-primary" htmlFor="tobecollected">To Be Collected</label>

                <input type="radio" className="btn-check" name="btnradio" id="storedfood" value="storedFood" checked={selectedOption === 'storedFood'} onChange={handleRadioChange} />
                <label className="btn btn-outline-primary" htmlFor="storedfood">Stored Food</label>

                <input type="radio" className="btn-check" name="btnradio" id="wastefood" value="wasteFood" checked={selectedOption === 'wasteFood'} onChange={handleRadioChange} />
                <label className="btn btn-outline-primary" htmlFor="wastefood">Waste Food</label>

                <input type="radio" className="btn-check" name="btnradio" id="donatedfood" value="donatedFood" checked={selectedOption === 'donatedFood'} onChange={handleRadioChange} />
                <label className="btn btn-outline-primary" htmlFor="donatedfood">Donated Food</label>

                <input type="radio" className="btn-check" name="btnradio" id="adduser" value="adduser" checked={selectedOption === 'adduser'} onChange={handleRadioChange} />
                <label className="btn btn-outline-primary" htmlFor="adduser">Add User</label>
            </div>

            <div className="table-responsive">
                {selectedOption === 'toBeCollected' && (
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
                            {dummyData[selectedOption].map(item => (
                                <tr key={item.id}>
                                    <td>{item.user_id}</td>
                                    <td>{item.user_name}</td>
                                    <td>{item.address}</td>
                                    <td>{item.food_detail}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.expected_person_can_eat}</td>
                                    <td>{item.Expiry_date}</td>
                                    <td>{item.vegetarian ? 'Yes' : 'No'}</td>
                                    <td>{item.Additional_instruction}</td>
                                    <td>
                                        <button className="btn btn-primary btn-sm mx-2" onClick={() => handleStoreFood(item.id)}>Add To Stored Food</button>
                                        <button className="btn btn-danger btn-sm mx-2" onClick={() => handleAddToWasteFood(item.id)}>Add To Waste Food</button>
                                        <button className="btn btn-secondary btn-sm mx-2" onClick={() => handleEdit(item.id)}>Edit</button>
                                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>


                    </table>
                )}
            </div>
            {showEditModal && selectedOption === 'toBeCollected' && (
                <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Item</h5>
                                <button type="button" className="btn-close" aria-label="Close" onClick={handleCancelEdit}></button>
                            </div>
                            <div className="modal-body">
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="foodDetail" className="form-label">Food Detail</label>
                                        <input type="text" className="form-control" id="foodDetail" value={editingItem.food_detail} onChange={(e) => setEditingItem({ ...editingItem, food_detail: e.target.value })} />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="quantity" className="form-label">Quantity</label>
                                        <input type="text" className="form-control" id="quantity" value={editingItem.quantity} onChange={(e) => setEditingItem({ ...editingItem, quantity: e.target.value })} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="expectedPersonCanEat" className="form-label">Expected Person Can Eat</label>
                                        <input type="text" className="form-control" id="expectedPersonCanEat" value={editingItem.expected_person_can_eat} onChange={(e) => setEditingItem({ ...editingItem, expected_person_can_eat: e.target.value })} />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                                        <input type="date" className="form-control" id="expiryDate" value={editingItem.Expiry_date} onChange={(e) => setEditingItem({ ...editingItem, Expiry_date: e.target.value })} />
                                    </div>

                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="vegetarian" className="form-label">Vegetarian</label>
                                        <select id="vegetarian" className="form-select" value={editingItem.vegetarian} onChange={(e) => setEditingItem({ ...editingItem, vegetarian: e.target.value === 'true' })}>
                                            <option value={true}>Yes</option>
                                            <option value={false}>No</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="additionalInstruction" className="form-label">Additional Instruction</label>
                                        <input type="text" className="form-control" id="additionalInstruction" value={editingItem.Additional_instruction} onChange={(e) => setEditingItem({ ...editingItem, Additional_instruction: e.target.value })} />
                                    </div>
                                </div>

                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={handleSaveEdit}>Save Changes</button>
                                <button type="button" className="btn btn-secondary" onClick={handleCancelEdit}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showReasonPopup &&
                <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Enter Reason</h5>
                                <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowReasonPopup(false)}></button>
                            </div>
                            <div className="modal-body">
                                <input type="text" className="form-control" value={reason} onChange={handleReasonChange} placeholder='Enter Reason' />
                                {error && <div className="text-danger">{error}</div>}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={handleReasonSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {selectedOption === 'storedFood' && (
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
                            {dummyData[selectedOption].map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.food_detail}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.expected_person_can_eat}</td>
                                    <td>{item.Expiry_date}</td>
                                    <td>{item.vegetarian ? 'Yes' : 'No'}</td>
                                    <td>{item.Additional_instruction}</td>
                                    <td>
                                        <button className="btn btn-primary btn-sm mx-2" onClick={() => handleDonate(item.id)}>Go For Donate</button>
                                        <button className="btn btn-danger btn-sm mx-2" onClick={() => handleAddToWasteFood(item.id)}>Add To Waste Food</button>
                                        <button className="btn btn-secondary btn-sm mx-2" onClick={() => handleEdit(item.id)}>Edit</button>
                                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            {showEditModal && selectedOption === 'storedFood' && (
                <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Item</h5>
                                <button type="button" className="btn-close" aria-label="Close" onClick={handleCancelEdit}></button>
                            </div>
                            <div className="modal-body">
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="foodDetail" className="form-label">Food Detail</label>
                                        <input type="text" className="form-control" id="foodDetail" value={editingItem.food_detail} onChange={(e) => setEditingItem({ ...editingItem, food_detail: e.target.value })} />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="quantity" className="form-label">Quantity</label>
                                        <input type="text" className="form-control" id="quantity" value={editingItem.quantity} onChange={(e) => setEditingItem({ ...editingItem, quantity: e.target.value })} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="expectedPersonCanEat" className="form-label">Expected Person Can Eat</label>
                                        <input type="text" className="form-control" id="expectedPersonCanEat" value={editingItem.expected_person_can_eat} onChange={(e) => setEditingItem({ ...editingItem, expected_person_can_eat: e.target.value })} />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                                        <input type="date" className="form-control" id="expiryDate" value={editingItem.Expiry_date} onChange={(e) => setEditingItem({ ...editingItem, Expiry_date: e.target.value })} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="vegetarian" className="form-label">Vegetarian</label>
                                        <select id="vegetarian" className="form-select" value={editingItem.vegetarian} onChange={(e) => setEditingItem({ ...editingItem, vegetarian: e.target.value })}>
                                            <option value={true}>Yes</option>
                                            <option value={false}>No</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="additionalInstruction" className="form-label">Additional Instruction</label>
                                        <input type="text" className="form-control" id="additionalInstruction" value={editingItem.Additional_instruction} onChange={(e) => setEditingItem({ ...editingItem, Additional_instruction: e.target.value })} />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={handleSaveEdit}>Save Changes</button>
                                <button type="button" className="btn btn-secondary" onClick={handleCancelEdit}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showReasonPopup &&
                <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Enter Reason</h5>
                                <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowReasonPopup(false)}></button>
                            </div>
                            <div className="modal-body">
                                <input type="text" className="form-control" value={reason} onChange={handleReasonChange} placeholder='Enter Reason' />
                                {error && <div className="text-danger">{error}</div>}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={handleReasonSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {selectedOption === 'wasteFood' && (
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
                            {dummyData[selectedOption].map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.food_detail}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.expected_person_can_eat}</td>
                                    <td>{item.Expiry_date}</td>
                                    <td>{item.vegetarian ? 'Yes' : 'No'}</td>
                                    <td>{item.reason}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {selectedOption === 'donatedFood' && (
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
                            {dummyData[selectedOption].map(item => (
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

            {selectedOption === 'adduser' && (
                <NgoApply />
            )}
        </div>
    );
}

export default NgoAdmin;