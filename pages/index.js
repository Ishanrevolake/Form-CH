import Head from 'next/head'
import Image from 'next/image'

import { useForm, ValidationError } from "@formspree/react";
import { Form, Input, Button, Checkbox } from 'antd';
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Home() {


  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [hospitalname, setHospitalname] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [otherinformation, setOtherinformation] = useState("");
  const [status, setStatus] = useState("");
  const [approximateAmount, setApproximateAmount] = useState("");

  const [itemname, setItemname] = useState("");
  const [itemDescription, setItemdecrriptio] = useState("");
  const [itemType, setItemtype] = useState("");
  const [itemQuantity, setItemquantity] = useState("");

  const [newiTem, setNewItem] = useState({
    itemname: "",
    itemDescription: "",
    itemType: "",
    itemQuantity: ""

  });

  const [attachments, setAttachment] = useState("");
  const [attachmentslist, setAttachmentslist] = useState([]);


  const [itemList, setItemList] = useState([]);



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      name,
      description,
      hospitalname,
      number,
      email,
      address,
      otherinformation,
      attachments,
      status,
      itemList,
      approximateAmount);

  }

  const submitBook = async (e) => {
    e.preventDefault();
    const response = await fetch('https://my9w6phodj.execute-api.us-east-1.amazonaws.com/dev/healthcare', {
      method: 'POST',
      body: JSON.stringify({
        name,
        description,
        hospitalName: hospitalname,
        number,
        email,
        address,
        otherinformation,
        attachments: attachmentslist,
        status,
        approximateAmount,
        items: itemList
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log(response);
    console.log(data);
  };

  const addItems = async () => {

    const previousItems = itemList;
    previousItems.push(

      {
        itemname: itemname,
        itemDescription: itemDescription,
        itemType: itemType,
        itemQuantity: itemQuantity

      }


    )

    console.log(" prevoisu Items", previousItems);
    setItemList(previousItems);
    console.log(" iTEM Items", itemList);


  }

  const addItems2 = async () => {

    const previousattachmentslist = attachmentslist;
    previousattachmentslist.push(attachments);

    setAttachmentslist(previousattachmentslist);

    console.log(attachmentslist);





  }


  return (

    <div >

      <nav className="navbar">

        <div className="logo">Medical</div>

        <ul className="nav-links">



          <div className="menu">
            <li>Home</li>
            <li>About</li>
            <li>Location</li>
            <li>Contact</li>
          </div>
        </ul>
      </nav>


      <br></br>
      <div className="container">




        <div >
          <form onSubmit={submitBook}  >

            <div className="col-lg-6">

              <p>
                <label
                  htmlFor="namedash"
                  className="label"

                >
                  Name
                </label>
                <input
                  value={name}
                  required
                  type="text"
                  className="input"
                  id="namedash"

                  placeholder="Enter the name"
                  onChange={(e) => setName(e.target.value)}
                />
              </p>


            </div>
            <div className="col-lg-6">

              <p>
                <label
                  htmlFor="namedash"
                  className="label"
                >
                  Hospital name
                </label>
                <input
                  required
                  value={hospitalname}
                  type="text"
                  className="input"
                  id="namedash"
                  placeholder="Enter hospital name"
                  onChange={(e) => setHospitalname(e.target.value)}
                />
              </p>

            </div>

            <div className="col-lg-6">

              <p>
                <label
                  htmlFor="namedash"
                  className="label"
                >
                  Contact Number
                </label>
                <input
                  value={number}
                  required
                  type="text"
                  className="input"
                  id="namedash"
                  placeholder="Enter Phone number"
                  onChange={(e) => setNumber(e.target.value)}
                />
              </p>

            </div>

            <div className="col-lg-6">

              <p>
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
              </p>

            </div>

            <div className="col-lg-6">

              <p>
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

                  placeholder="Enter Email "
                  onChange={(e) => setAddress(e.target.value)}
                />
              </p>

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
                  maxLength="10"

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

              <div id="topicDiv">

                <h2 id="topic" >Add Needs</h2>

              </div>


            </center>


            <div className="additem">
              <div className='itemMenu' >

                <label
                  htmlFor="namedash"
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


                <label
                  htmlFor="namedash"
                  className="itemLabel"
                >
                  Description
                </label>
                <textarea
                  value={itemDescription}
                  type="textarea"
                  maxLength="10"
                  onChange={(e) => setItemdecrriptio(e.target.value)}
                  name="textarea"
                  id="aboutTextarea"
                  placeholder="Type Description here"
                ></textarea>

                <label
                  htmlFor="namedash"
                  className="itemLabel"
                >
                  Type
                </label>
                <select onChange={(e) => setItemtype(e.target.value)} value={itemType} className="selection" >

                  <option value="medicine" >
                    medicene
                  </option>
                  <option value="paper" >
                    Paper
                  </option>
                  <option value="Oxygen" >
                    Oxygen
                  </option>

                </select>

                <label
                  htmlFor="namedash"
                  className="itemLabel"
                >
                  Quantity
                </label>
                <input
                  onChange={(e) => setItemquantity(e.target.value)}
                  type="number"
                  maxLength="10"
                  value={itemQuantity}
                  name="textarea"
                  id="aboutTextarea"
                  placeholder="Type Description here"
                ></input>


                <center>
                  <br></br>
                  <button
                    onClick={addItems}
                    type="reset"
                    className="addtButton"

                  >
                    Add
                  </button>

                </center>
              </div>

              <br></br>
              <br></br>
              <div id="tablediv" >



                <table>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Description</th>
                      <th>Type</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>


                    {itemList.map((a) => <tr key={a.itemname} >

                      <td> {a.itemname}   </td>
                      <td> {a.itemDescription}   </td>

                      <td> {a.itemType}   </td>
                      <td> {a.itemQuantity}   </td>

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
                  value={otherinformation}
                  required
                  type="text"
                  className="input"
                  id="namedash"
                  placeholder="Enter the name"
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
                  approximateAmount
                </label>
                <input
                  value={approximateAmount}
                  required
                  type="number"
                  className="input"
                  id="namedash"
                  placeholder="Enter the name"
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
                  type="number"
                  className="input"
                  id="namedash"
                  placeholder="Enter the name"
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
