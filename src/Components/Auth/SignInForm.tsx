"use client";
import { CreateAccount, DontHaveAccount, EmailAddress, ForgotPassword, Href, OrSignInWith, Password, RememberPassword, SignIn, SignInToAccount,EnterYourEmailAndPasswordToLogin } from "@/Constant";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import imageOne from "../../../public/assets/images/logo/logo-1.png"
import imageTwo from "../../../public/assets/images/logo/logo.png"
import SocialLinks from "./SocialLinks";
import { Routes } from "@/Utils/Routes";

const SignInForm = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("Test123@gmail.com");
  const [password, setPassword] = useState("Test@123");
  const router = useRouter();
 
  const formSubmitHandle = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();                                                                                  
    const result = await signIn("credentials", {
      email,   
      password,  
      redirect: false,
      callbackUrl: Routes.Dashboard.DefaultDashboard,
    });
  
    if (result?.ok) {
      toast.success("Successfully logged in...")
      router.push(Routes.Dashboard.DefaultDashboard);
    } else {     
      toast.error("Invalid credentials...");
    }
  };

  return (
    <div>
      <div>
        <Link className="logo" href={Routes.Dashboard.DefaultDashboard}>
          <Image priority width={114} height={38} className="img-fluid for-light" src={imageOne} alt="login page" />
          <Image priority width={114} height={38} className="img-fluid for-dark" src={imageTwo} alt="login page" />
        </Link>
      </div>
      <div className="login-main">
        <Form className="theme-form" onSubmit={(event) => formSubmitHandle(event)}>
          <h3>{SignInToAccount}</h3>
          <p>{EnterYourEmailAndPasswordToLogin}</p>
          <FormGroup>
            <Label className="col-form-label">{EmailAddress}</Label>
            <Input type="email" defaultValue={email} onChange={(event) => setEmail(event.target.value)} placeholder="Test123@gmail.com" required/>
          </FormGroup>
          <FormGroup>
            <Label className="col-form-label">{Password}</Label>
            <div className="form-input position-relative">
              <Input type={show ? "text" : "password"} defaultValue={password} onChange={(event) => setPassword(event.target.value)} placeholder="Test@123" required/>
              <div className="show-hide" onClick={() => setShow(!show)}>
                <span className="show" />
              </div>
            </div>
          </FormGroup>
          <FormGroup className="mb-0">
            <div className="checkbox p-0">
              <Input id="checkbox1" type="checkbox" />
              <Label className="text-muted" htmlFor="checkbox1">{RememberPassword}</Label>
            </div>
            <Link className="link" href={Href}>{ForgotPassword}?</Link>
            <div className="text-end mt-3">
              <Button type='submit' color="primary" block>{SignIn}</Button>
            </div>
          </FormGroup>
          <h6 className="text-muted mt-4 or">{OrSignInWith}</h6>
          <SocialLinks />
          <p className="mt-4 mb-0 text-center">{DontHaveAccount}
            <Link className="ms-2" href={Href}>{CreateAccount}</Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default SignInForm;