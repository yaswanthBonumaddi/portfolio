import  {  useState } from "react";
import emailjs from "@emailjs/browser";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isloading, setisLoading] = useState(false);
  const {alert, showAlert, hideAlert} = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFocus = () => {};
  const handleBlur = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoading(true);
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "yash",
        from_email: form.email,
        to_email: 'yaswanth7013@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    ).then(()=>{
      setisLoading(false)
      showAlert({show:true, text:"Message sent successfully!", type:'success'})

      setTimeout(()=>{
        setForm({name:"", email:"", message:""})
        hideAlert();
      },[3000])

    }).catch((error)=>{
      setisLoading(false);
      console.log(error)
      showAlert({show:true, text:"I didn't receive your message", type:"danger"})
    })
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container h-[100%]">
    {alert.show && <Alert {...alert}/>}
    
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form
          className=" w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="yashwanth"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="text"
              name="email"
              className="input"
              placeholder="yashwanth@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            {" "}
            Your Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Let me know how i can help you!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={isloading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isloading ? "Sending... " : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
