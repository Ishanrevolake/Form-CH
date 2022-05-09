import Head from 'next/head'
import Image from 'next/image'

import { useForm, ValidationError } from "@formspree/react";
import { Form, Input, Button, Checkbox } from 'antd';
import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';

export default function Home() {


  const [name, setName] = useState("");
  const [hospitalName, setHospitalname] = useState("");
  const [description, setDescription] = useState("");
  const [contactNumber, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [otherInformation, setOtherinformation] = useState("");
  const [status, setStatus] = useState("");
  const [approximateAmount, setApproximateAmount] = useState("");

  const [itemname, setItemname] = useState("");
  const [itemDescription, setItemdecrriptio] = useState("");
  const [itemType, setItemtype] = useState("");
  const [itemQuantity, setItemquantity] = useState("");

  const [responsse, setResponse] = useState("");

  const [attachments, setAttachment] = useState("");
  const [attachmentslist, setAttachmentslist] = useState([]);


  const [itemList, setItemList] = useState([]);

  const submitBook = async (e) => {



    e.preventDefault();
    const inputs = {
      "name": name,
      "description": description,
      "hospitalName": hospitalName,
      "contactNumber": contactNumber,
      "email": email,
      "address": address,
      "items":itemList,
      "otherInformation": otherInformation,
      "attachments":attachmentslist,
      "approximateAmount": approximateAmount,
      "status": status
  }
    const response = await axios.post('https://my9w6phodj.execute-api.us-east-1.amazonaws.com/dev/healthcare',
    inputs)
    

    console.log(response);
    setResponse(responsse);
    
    if(responsse =! 200 ){
      alert("Error");
    }else{
      alert("Submitted");
    }

    console.log(inputs);
   

    // if(responsse != 200){
    //   alert("Error");
    // }else{
    //   alert("Submitted");
    // }

  };

  const addItems = async () => {

    const previousItems = itemList;
    previousItems.push(

      {
        name: itemname,
        description: itemDescription,
        type: itemType,
        quantity: itemQuantity
     }


    )

    console.log(" prevoisu Items", previousItems);
    setItemList(previousItems);
    console.log(" iTEM Items", itemList);
    setItemquantity(0);

  }

  const addItems2 = async () => {

    const previousattachmentslist = attachmentslist;
    previousattachmentslist.push(attachments);

    setAttachmentslist(previousattachmentslist);

    console.log(attachmentslist);


    setAttachment("");


  }

  const ob = {
    name,
    description,
    hospitalName,
    contactNumber,
    email,
    address,
    otherInformation,
    attachments: attachmentslist,
    status,
    approximateAmount,
    items: itemList
  }

  return (

    <div >

      <nav className="navbar">

        <div className="logo">Logo</div>

        <ul className="nav-links">



          <div className="menu">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </div>
        </ul>
      </nav>


      <br></br>
      <div className="container">




        <div >
          <form onSubmit={submitBook}  >
            
            <div className="name">

             
                <label
                
                  className="label"
      
                >
                  Name
                </label>
                <input
                  value={name}
               
                  className="input"
                

                  placeholder="Enter the name"
                  onChange={(e) => setName(e.target.value)}
                />
             


            </div>
            <div className="name">

            
                <label
                 
                  className="label"
                >
                  Hospital name
                </label>
                <input
                
                  value={hospitalName}
                 
                  className="input"
                  
                  placeholder="Enter hospital name"
                  onChange={(e) => setHospitalname(e.target.value)}
                />
            

            </div>

            <div id="contactnum" className="col-lg-6">

              
                <label
                  htmlFor="namedash"
                  className="label"
                >
                  Contact Number
                </label>
                <input
                  value={contactNumber}
                  required
                  type="text"
                  className="input"
                  id="namedash"
                  placeholder="Enter Phone number"
                  onChange={(e) => setNumber(e.target.value)}
                />
             

            </div>

            <div className="col-lg-6">

           
                <label
                  htmlFor="namedash"
                  className="label"
                >
                  Email
                </label>
                <input
                  value={email}
                  required
                  type="text"
                  className="input"
                  id="namedash"
                  placeholder="Enter Email "
                  onChange={(e) => setEmail(e.target.value)}
                />
             

            </div>

            <div className="col-lg-6">

             
                <label
                  htmlFor="namedash"
                  className="label"
                >
                  Address
                </label>
                <input
                  value={address}
                  required
                  type="text"
                  className="input"

                  placeholder="Enter Address "
                  onChange={(e) => setAddress(e.target.value)}
                />
              

            </div>

            <div className="cols-lg-12">

              <p className='textarea'>
                <label
                  htmlFor="aboutTextarea"
                  className="label"
                >
                  Description
                </label>



                <textarea
                  value={description}
                  type="textarea"


                  name="textarea"
                  id="aboutTextarea"
                  placeholder="Type Description here"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </p>
            </div>

            <br>
            </br>
            <center>

              {/* <div id="topicDiv">

                <h2 id="topic" >Add Needs</h2>

              </div> */}


            </center>


            <div className="additem">
              <div className='itemMenu' >


                <label
               
                  className="itemLabel"
                >
                  Name
                </label>
                <input
                  value={itemname}
                  required
                  type="text"
                  className="itemInput"
                  id="namedash"
                  placeholder="Enter Name "
                  onChange={(e) => setItemname(e.target.value)}
                />

                  <br></br>
              
                <label  
                  htmlFor="namedash"
                  className="itemLabel"
                >
                  Description
                </label>
                <textarea
                  value={itemDescription}
                  type="textarea"

                  onChange={(e) => setItemdecrriptio(e.target.value)}
                  name="textarea"
                  id="aboutTextarea2"
                  placeholder="Type Description here"
                ></textarea>

                <div id="type" >

                <label
                  htmlFor="namedash"
                  className="itemtype"
                >
                  Type
                </label>
                <select onChange={(e) => setItemtype(e.target.value)} value={itemType} className="selection" >

                  <option value="Medicine" >
                    Medicene
                  </option>
                  <option value="Other" >
                   Other
                  </option>
                  <option value="Oxygen" >
                    Oxygen
                  </option>

                </select>



                </div>

                <br></br>

                <label
                  htmlFor="namedash"
                  className="itemLabel"
                >
                  Quantity
                </label>
                <input
                  onChange={(e) => setItemquantity(e.target.value)}
                  type="number"
                  value={itemQuantity}
                  name="textarea"
                 
                  placeholder="Add quantitiy here"
                ></input>


                <center>
                  <br></br>
                  <button
                    onClick={addItems}
                    type="button"
                    className="addtButton"

                  >
                    Add
                  </button>

                </center>
              </div>

              <br></br>
              <br></br>
              <div id="tablediv" >



                <table id="table" >
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Description</th>
                      <th>Type</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>


                    {itemList.map((a) => <tr key={a.name} >

                      <td> {a.name}   </td>
                      <td> {a.description}   </td>
                      <td> {a.type}   </td>
                      <td> {a.quantity}   </td>

                    </tr>)}
                    </tbody>
                </table>







              </div>


            </div>

            <br></br>
            <div className="col-lg-6">

              <p>
                <label
                  htmlFor="namedash"
                  className="label"

                >
                  Other Information
                </label>
                <input
                  value={otherInformation}
                  required
                  type="text"
                  className="input"
                  id="namedash"
                  placeholder="Other Information"
                  onChange={(e) => setOtherinformation(e.target.value)}
                />
              </p>


            </div>
            <div className="col-lg-6">

              <p>
                <label
                  htmlFor="namedash"
                  className="label"
                >
                  approximate Amount
                </label>
                <input
                  value={approximateAmount}
                  required
                  type="number"
                  className="input"
                  id="namedash"
                  placeholder="Enter the approximateAmount"
                  onChange={(e) => setApproximateAmount(e.target.value)}
                />
              </p>


            </div>
            <div className="col-lg-6">


              <label
                htmlFor="namedash"
                className="label"

              >
                attachments
              </label>
              <input
                value={attachments}

                type="text"
                className="input"
                id="namedash"
                placeholder="Enter the URLs"
                onChange={(e) => setAttachment(e.target.value)}

              />

              <center>

                <button
                  onClick={addItems2}
                  type="reset"
                  className="addtButton"

                >
                  Add
                </button>

                <br></br>

                <div id="attachmentlist">
                  {attachmentslist.map((a) => <div key={a} >

                    <ul>{a}</ul>

                  </div>)}
                </div>

              </center>


            </div>
            <div className="col-lg-6">

              <p>
                <label
                  htmlFor="namedash"
                  className="label"

                >
                  Status
                </label>
                <input
                  value={status}
                  required
                  type="text"
                  className="input"
                  id="namedash"
                  placeholder="Status"
                  onChange={(e) => setStatus(e.target.value)}
                />
              </p>




            </div>
            <center>
              <br></br>
              <button
                type='submit'

                className="submitButton"

              >
                Submit
              </button>

            </center>




          </form>
        </div>



      </div>
    </div>

  )

}
