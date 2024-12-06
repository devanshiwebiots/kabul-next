import { Address, AddressRequired, CheckMeOut, CheckoutRequired, CityRequired, Country, EmailAddress, EmailRequired, FirstName, FirstNameRequired, LastName, LastNameRequired, Phone, PhoneRequired, PincodeRequired, PlaceOrder, PostalCode, StateCountry, StateRequired, TownCity } from '@/Constant';
import { CheckoutFormType } from '@/Types/Ecommerce';
import { Routes } from '@/Utils/Routes';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

const CheckoutForm = () => {
  const router = useRouter();
  const {register,handleSubmit,formState: { errors },reset} = useForm<CheckoutFormType>();

  const onSubmit:SubmitHandler<CheckoutFormType> = (data) => {    
    if (data !== undefined) {
      router.push(Routes.ECommerce.Invoice1);
    }
    reset();
  };

  return (
    <Col xl={6} sm={12}>
      <Form onSubmit={handleSubmit(onSubmit)} className="form-bookmark needs-validation">
        <Row>
          <Col sm={6}>
            <FormGroup>
              <Label check>{FirstName}</Label>
              <Input type="text" {...register("firstName", { required: true })} />
              {errors.firstName && <span className="txt-danger">{FirstNameRequired}</span>}
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup>
              <Label check>{LastName}</Label>
              <Input type="text" {...register("lastName", { required: true })} />
              {errors.lastName && <span className="txt-danger">{LastNameRequired}</span>}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <FormGroup>
              <Label check>{Phone}</Label>
              <Input type="number" {...register("phone", { required: true })} />
              {errors.phone && <span className="txt-danger">{PhoneRequired}</span>}
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup>
              <Label check>{EmailAddress}</Label>
              <Input type="text" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
              {errors.email && <span className="txt-danger">{EmailRequired}</span>}
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label check>{Country}</Label>
          <Input type="select" id="inputState" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label check>{Address}</Label>
          <Input type="text" {...register("address", { required: true, min: 20, max: 120 })} />
          {errors.address && <span className="txt-danger">{AddressRequired}</span>}
        </FormGroup>
        <FormGroup>
          <Label check>{TownCity}</Label>
          <Input type="text" {...register("city", { required: true })} />
          {errors.city && <span className="txt-danger">{CityRequired}</span>}
        </FormGroup>
        <FormGroup>
          <Label check>{StateCountry}</Label>
          <Input type="text" {...register("state", { required: true })} />
          {errors.state && <span className="txt-danger">{StateRequired}</span>}
        </FormGroup>
        <FormGroup>
          <Label check>{PostalCode}</Label>
          <Input type="text" {...register("pincode", { pattern: /\d+/ })} />
          {errors.pincode && <span className="txt-danger">{PincodeRequired}</span>}
        </FormGroup>
        <FormGroup check>
        <Input type="checkbox" {...register("check", { required: true })} />
           <Label check className="m-0">{CheckMeOut}</Label>
           {errors.check &&  <p className="txt-danger mt-0">{CheckoutRequired}</p>}
        </FormGroup>
        <div className="text-end order-place mb-3">
          <Button color="primary" type="submit">{PlaceOrder}</Button>
        </div>
      </Form>
    </Col>
  )
}

export default CheckoutForm