import RatioImage from "@/CommonComponents/RatioImage";
import { ImagePath, KnowledgebaseHelpQue, KnowledgebasePlaceholder } from "@/Constant";
import { Search } from "react-feather";
import { Col, Form, FormGroup, Input } from 'reactstrap';

const KnowledgebaseHelp = () => {
  return (
    <Col xs={12}>
      <div className="knowledgebase-bg">
        <RatioImage className="bg-img-cover bg-center w-100 h-100 rounded-4" src={`${ImagePath}/knowledgebase/bg_1.jpg`} alt="looginpage"/></div>
      <div className="knowledgebase-search">
        <div>
          <h4 className="f-w-500">{KnowledgebaseHelpQue}</h4>
          <Form onSubmit={(e)=>e.preventDefault()} className="form-inline" method="get">
            <FormGroup className="w-100 m-0">
              <Search/>
              <Input plaintext className="w-100 border-0 shadow-none" type="text" placeholder={KnowledgebasePlaceholder}/>
            </FormGroup>
          </Form>
        </div>
      </div>
    </Col>
  );
};

export default KnowledgebaseHelp;