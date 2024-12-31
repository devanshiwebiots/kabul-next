import { Href } from '@/Constant';
import { CategoryListProps } from '@/Types/Learning';
import Link from 'next/link';
import { Badge } from 'reactstrap';

const CommonCategorySection: React.FC<CategoryListProps> = ({ title, data, className = '' }) => {
    return (
        <div className={`categories ${className}`}>
            <div className="learning-header">
                <span className="f-w-700">{title}</span>
            </div>
            <ul>
                {data?.map((item, index) => (
                    <li className="border-0" key={index}>
                        <Link href={Href}>
                            {item.learningHeading || item.DevelopmentHeading}
                        </Link>
                        <Badge color="primary" className="pull-right">
                            {item.badgeNumber}
                        </Badge>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CommonCategorySection
