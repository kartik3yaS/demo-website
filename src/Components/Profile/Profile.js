import Card1 from "../Card1/Card1";
import user from "../Images/user.jpg";
import "./Profile.css";
import Card2 from "../Card2/Card2";
import Card3 from "../Card3/Card3";

const Profile = () => {
    return(
        <div className="profile">
            <Card1
                emoji={user} 
            />
            <Card2 />
            <Card3 />
        </div>
    )
}

export default Profile;