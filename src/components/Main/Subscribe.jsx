import { useState } from "react";

import { styled } from "styled-components";
import { breakpoints } from "../../styles/Breakpoints";
import { colorList } from "../../styles/ColorSettings";

export default function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.length === 0) return;
    return alert(`The news will sent to ${email}`);
  };
  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <section id="subscribe">
      <SubscribeContainer>
        <SubscribeLabel for="subscribe-input" className="title">
          Stay tuned for our latest projects!
        </SubscribeLabel>

        <SubscribeForm>
          <SubscribeInput
            type="email"
            id="subscribe-input"
            placeholder="Write your email here..."
            value={email}
            onChange={handleChange}
          ></SubscribeInput>
          <SubscribeSubmit id="subscribe-submit" onClick={handleSubmit}>
            Confirm &#10148;
          </SubscribeSubmit>
        </SubscribeForm>
      </SubscribeContainer>
    </section>
  );
}

const SubscribeContainer = styled.div`
  text-align: center;
  width: 90%;
  margin: 0 auto;
  padding: 24px 0;

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 60%;
  }
  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 90%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const SubscribeLabel = styled.label`
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  color: ${colorList.black};
  @media screen and (min-width: ${breakpoints.tablet}) {
    height: 36px;
    line-height: 36px;
  }
  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 50%;
  }
`;

const SubscribeForm = styled.form`
  margin-top: 16px;
  height: 32px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: ${breakpoints.tablet}) {
    height: 36px;
  }
  @media screen and (min-width: ${breakpoints.desktop}) {
    margin-top: 0;
    width: 50%;
  }
`;
const SubscribeInput = styled.input`
  height: 100%;
  width: 70%;
  border: 1px solid ${colorList.primary};
  border-radius: 5px 0 0 5px;
  padding: 0 10px;
  font-size: 0.75em;
  color: ${colorList.neutral_70};
  &:focus {
    border: 2px solid ${colorList.green_focus};
  }
`;
const SubscribeSubmit = styled.button`
  height: 100%;
  width: 30%;
  min-width: 96px;
  background-color: ${colorList.primary};
  border: none;
  border-radius: 0 5px 5px 0;
  padding: 0 10px;
  font-size: 1em;
  color: ${colorList.white};
`;
