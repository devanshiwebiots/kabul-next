import { CheckboxAndRadioType } from '@/Types/Faq';
import { Label, Input } from 'reactstrap';

const CommonCheckboxAndRadio:React.FC<CheckboxAndRadioType> = ({ title, data, type = 'checkbox', name, className = '' ,defaultCheckedIndex}) => {
    return (
        <div className={`checkbox-animated ${className}`}>
          <div className="learning-header">
            <span className="f-w-700">{title}</span>
          </div>
          {data?.map((item, index) => (
            <Label key={index} className="d-block" htmlFor={`${name}-${index}`} check>
              <Input
                className={type === 'radio' ? 'radio_animated' : 'checkbox_animated'}
                id={`${name}-${index}`}
                type={type}
                name={type === 'radio' ? name : undefined} 
                defaultChecked={type === 'radio' && defaultCheckedIndex === index}
              />
              {item}
            </Label>
          ))}
        </div>
      );
}

export default CommonCheckboxAndRadio
