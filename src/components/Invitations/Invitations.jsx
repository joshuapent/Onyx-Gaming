import "./Invitations.css";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function Invitations({ user }) {
    const invites = [{name: 'john'}]

  return (
    <div className="ChatPage">
      <h1 className="inviteh1"><PersonAddAltIcon fontSize="large"/>&nbsp; Invitations (number)</h1>
      <hr className="line"/>
      <ul className="inviteul">
          {invites.map((invite, idx) => {
            return (
              <li className="inviteli" key={invite + idx}>
                <span className="invitespan">{invite.name}: </span>
                <button className="invitebtn"><CheckCircleOutlineIcon fontSize="large"/> Accept</button>
              </li>
            );
          })}
        </ul>
    </div>
  );
}

export default Invitations;
