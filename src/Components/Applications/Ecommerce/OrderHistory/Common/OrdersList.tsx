import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Href, ImagePath } from "@/Constant";
import { OrderData } from "@/Data/Ecommerce";
import { OrderListProps } from "@/Types/Ecommerce";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { X } from "react-feather";
import { Rating } from "react-simple-star-rating";
import { Badge, Card, CardBody, Col, Row } from "reactstrap";

const OrdersList: React.FC<OrderListProps> = ({ title, btnColor, btnText }) => {
    const [newOrder, setNewOrder] = useState(OrderData);
    const deleteHandler = (id: number) => {
        const newData = newOrder.filter((item) => item.id !== id);
        setNewOrder([...newData]);
    };

    return (
        <Card>
            <CommonCardHeader title={title} />
            <CardBody>
                <Row className='g-sm-4 g-3'>
                    {newOrder?.map((item, index) => (
                        <Col xxl={4} md={6} key={index}>
                            <div className='prooduct-details-box'>
                                <div className='d-flex'>
                                    <Image height={60} width={60} className='align-self-center img-fluid' src={`${ImagePath}/ecommerce/product-table-${item.image}.png`} alt={item.name} />
                                    <div className='flex-grow-1 ms-3'>
                                        <div className='product-name'>
                                            <h6>
                                                <Link href={Href}>{item.name}</Link>
                                            </h6>
                                        </div>
                                        <Rating initialValue={5} size={17} />
                                        <div className='price d-flex p-0 border-0'>
                                            <div className='text-muted'>Price</div>: 210$
                                        </div>
                                        <div className='avaiabilty'>
                                            <div className='text-success'>In stock</div>
                                        </div>
                                        <Badge color={`light-${btnColor}`} className={`txt-${btnColor}`} >
                                            {btnText}
                                        </Badge>
                                        <X className='close' onClick={() => deleteHandler(item.id)} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </CardBody>
        </Card>
    );
};

export default OrdersList;
