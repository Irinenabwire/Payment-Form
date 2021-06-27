import React, { useState, useEffect } from "react";
import "./apps.css";
import { db } from "../firebase";

const Payment = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [provider, setProvider] = useState("");
  const [amount, setAmount] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("Payment Form")
      .add({
        name: name,
        id: id,
        email: email,
        provider: provider,
        amount:amount,
      })
      .then(() => {
        setLoader(false);
        alert("Money has been successfully sent.Thank you for using lipa na M-pesa👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
    setName("");
    setId("");
    setEmail("");
    setProvider("");
    setAmount("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Zegetech online payment form  </h1>
      
      <label>FullName<span>*</span></label>
       
      <input
      type="text"
        placeholder="enter you fullName"
        imgSrc="https://store-images.s-microsoft.com/image/apps.56036.13510798887943477.d0f8dce1-4dfd-40fc-9f96-dfec87e14014.c123ce60-7bb4-4044-8d93-7b3a4d70eaae"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>National Id/passport <span>*</span></label>
       
      <input
      type="number"
        placeholder="Enter your national Id/Passport"
        imgSrc="https://store-images.s-microsoft.com/image/apps.56036.13510798887943477.d0f8dce1-4dfd-40fc-9f96-dfec87e14014.c123ce60-7bb4-4044-8d93-7b3a4d70eaae"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <label>Email or Phonenumber<span>*</span></label>
      <input
        placeholder="Enter email/phonenumber"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Network Provider<span>*</span></label>
      <input
      type="text"
        placeholder="e.g Safaricom"
        value={provider}
        onChange={(e) => setProvider(e.target.value)}
      ></input>
      <label>Amount<span>*</span></label>
      <input
      type="number"
        placeholder="enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      ></input>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Send Money
      </button>
    </form>
  );
};

export default Payment;








// import React from "react";
// import {db} from "../firebase";
// import "./apps.css";

// class Payment extends React.Component {
//   render(){
//     return (
//       <div className="app-container">
//         <div className="row">
//           <div className="col">
//             <Item  img="https://previews.123rf.com/images/gunawanarief/gunawanarief1611/gunawanarief161100249/68563215-pay-online-logo-template-design-vector.jpg" />
//           </div>
//           <div className="col no-gutters">
//             <Checkout />
//           </div>
//         </div>
//        </div>
//     )
//   }
// }

// const Item = (props) => (
//   <div className="item-container">
//     <div className="item-image">
//       <img src={props.img}/>
//       <div className="item-details">
//         <h3 className="item-name"> {props.name} </h3>
//         <h2 className="item-price"> {props.price} </h2>
//       </div>
//     </div>
//   </div>
// );

// const Checkout = (props) => (
//  <div className="checkout">
//     <div className="checkout-container">
//      <h3 className="heading-3">Pay Online </h3>
//      <Input label="Id No" type="Number" name="Id number" />
//      <Input label="Provider" type="number" name="Provider" imgSrc="https://store-images.s-microsoft.com/image/apps.56036.13510798887943477.d0f8dce1-4dfd-40fc-9f96-dfec87e14014.c123ce60-7bb4-4044-8d93-7b3a4d70eaae" />
//       <div className="row">
//         <div className="col">
//           <Input label="Phonenumber" type="number" name="Phonenumber" />
//         </div>
//         <div className="col">
//           <Input label="Amount" type="number" name="Amount" />
//         </div>
        
//       </div>
//       <Button text="Send Money" />
//       <Button text="Cancel" />
//     </div>
//  </div>
// );

// const Input = (props) => (
//   <div className="input">
//     <label>{props.label}</label>
//     <div className="input-field">
//       <input type={props.type} name={props.name} />
//       <img src={props.imgSrc}/>
//     </div>
//   </div>
// );

// const Button = (props) => (
//   <button className="checkout-btn" type="button">{props.text}</button>
// );

// export default Payment;
