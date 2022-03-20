import { useState, useEffect } from "react";

import { AppWrap, MotionWrap } from "../../wrapper";
import {
  Button,
  CardItem,
  ContactForm,
  ContactMessage,
  Contain,
  Container,
  FooterCard,
  FooterCards,
  FormItem,
  Image,
  Input,
  Message,
  SuccessMessage,
  Text,
  Title,
} from "./FooterStyles";
import { client, urlFor } from "../../client";

const Footer = () => {
  const [footer, setFooter] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleInputChange = e => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  useEffect(() => {
    const query = '*[_type == "footer"]';

    client.fetch(query).then(data => {
      setFooter(data[0]);
    });
  }, []);

  return (
    <Container id="contact">
      <Contain>
        {footer && (
          <>
            <Title>{footer.title}</Title>
            <FooterCards>
              <FooterCard>
                <Image src={urlFor(footer.email)} alt="email" />
                <CardItem href="mailto:ejimalex@gmail.com">ejimalex@gmail.com</CardItem>
              </FooterCard>
              <FooterCard>
                <Image src={urlFor(footer.phone)} alt="phone" />
                <CardItem href="tel: +234 905 574 099">+234 905 574 099</CardItem>
              </FooterCard>
            </FooterCards>
            {!isFormSubmitted ? (
              <ContactForm>
                <FormItem>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                  />
                </FormItem>
                <FormItem>
                  <Input
                    type="text"
                    placeholder="Your Email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                  />
                </FormItem>
                <ContactMessage>
                  <Message
                    placeholder="Your Message"
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                  />
                </ContactMessage>
                <Button type="button" onClick={handleSubmit}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </ContactForm>
            ) : (
              <SuccessMessage>
                <Text>{footer.successMessage}</Text>
              </SuccessMessage>
            )}
          </>
        )}
      </Contain>
    </Container>
  );
};
export default MotionWrap(AppWrap(Footer, "contact"));
