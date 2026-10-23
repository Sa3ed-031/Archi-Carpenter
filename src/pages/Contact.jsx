// ICONS
import XIcon from "@mui/icons-material/X";
import CallIcon from "@mui/icons-material/Call";
import RoomIcon from "@mui/icons-material/Room";
import EmailIcon from "@mui/icons-material/Email";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

// COMPONENTS
import IconButton from "@mui/material/IconButton";
import MapComponent from "../components/MapComponent";

import { useState } from "react";

export default function Contact() {
  const [formInfo, setFormInfo] = useState({
    email: "",
    name: "",
    phone: "",
    message: "",
  });

  return (
    <div className="contact-page-container">
      <div className="contact-landing flex-items-center justify-center">
        <div className="img bg-img"></div>

        <div className="content not-found-services-projects-content flex-items-center">
          <span>Contact Us</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum rem
            nemo aperiam est necessitatibus delectus
          </p>
        </div>
      </div>

      <div className="get-in-touch flex">
        <div className="left">
          <h1 className="font-bold">Get In Touch</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            maxime quas deserunt illo similique.
          </p>

          <div className="links flex gap-4 flex-wrap py-6">
            {[
              {
                span: "+82 543 6544",
                Icon: CallIcon,
              },
              { span: "mail@wdcraft.co", Icon: EmailIcon },
              { span: "wdcraft.id", Icon: InstagramIcon },
              { span: "London Eys, UK", Icon: RoomIcon },
            ].map((item, i) => (
              <div key={i} className="link">
                <item.Icon />
                <span>{item.span}</span>
                <p>Lorem ipsum dolor sit.</p>
              </div>
            ))}
          </div>

          <div className="media  flex gap-4 flex-col py-2">
            <h2 className="font-bold text-xl">Social Media:</h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              nobis at. Quisquam vel laborum cum odio earum cumque libero.
            </p>
            <div className="media-links flex gap-1">
              {[FacebookIcon, XIcon, YouTubeIcon, WhatsAppIcon].map(
                (Item, i) => (
                  <IconButton key={i} className="icon-btn">
                    <Item />
                  </IconButton>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="right flex quality-workmanship">
          <div className="quality-content">
            <form
              className="flex items-start h-full flex-col justify-evenly"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="name-email">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={formInfo.email}
                  onChange={(e) => {
                    setFormInfo({ ...formInfo, email: e.target.value });
                  }}
                />
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={formInfo.name}
                  onChange={(e) => {
                    setFormInfo({ ...formInfo, name: e.target.value });
                  }}
                />
              </div>

              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone"
                value={formInfo.phone}
                onChange={(e) => {
                  setFormInfo({ ...formInfo, phone: e.target.value });
                }}
              />

              <textarea
                name="message"
                id="message"
                placeholder="Message"
                value={formInfo.message}
                onChange={(e) => {
                  setFormInfo({ ...formInfo, message: e.target.value });
                }}
              />

              <button className="hover-scale-btn" type="submit">
                Submit Button
              </button>
            </form>
          </div>
        </div>
      </div>

      <MapComponent
      //  center={[34.5, 38.5]} zoom={10} height="300px"
      />
    </div>
  );
}
