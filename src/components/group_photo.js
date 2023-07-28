import { PureComponent } from "react";
class GroupPhoto extends PureComponent{

    render(){
        return <div className="cover_pic">
        <img
          id="class_photo"
          src={`https://drive.google.com/uc?export=view&id=${this.props.coverPhoto}`}
          alt="cover"
        />
      </div>;
    }
}

export default GroupPhoto;
