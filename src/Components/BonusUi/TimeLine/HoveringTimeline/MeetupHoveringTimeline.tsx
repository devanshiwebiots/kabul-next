import { ImagePath, USMeeting } from "@/Constant";
import { MeetupHoveringList } from "@/Data/BonusUi/Timeline";
import Image from "next/image";

const MeetupHoveringTimeline = () => {
  return (
    <li className="timeline-event">
      <label className="timeline-event-icon" />
      <div className="timeline-event-wrapper">
        <p className="timeline-thumbnail">December 2024 - Meetup</p>
        <h5>{USMeeting}</h5>
        <div className="text-muted">
          2209 Leverton Cove RoadSpringfield, MA 01109
          <div className="designer-details">
            {MeetupHoveringList?.map(({ image, name, number }, index) => (
              <div className="designer-profile" key={index}>
                <div className="designer-wrap">
                  <Image height={50} width={50} priority className="designer-img" src={`${ImagePath}/avtar/${image}.jpg`} alt="profile" />
                  <div className="designer-content">
                    <h6>{name}</h6>
                    <p>{number}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};

export default MeetupHoveringTimeline;