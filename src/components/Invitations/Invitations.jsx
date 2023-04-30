import "./Invitations.css";

function Invitations({ user }) {
    const invites = [{name: 'john'}]

  return (
    <div className="ChatPage">
      <h1 className="inviteh1">Invitations (number)</h1>
      <ul className="inviteul">
          {invites.map((invite, idx) => {
            return (
              <li key={invite + idx}>
                <span>{invite.name}: </span>
                <button>Accept</button>
              </li>
            );
          })}
        </ul>
    </div>
  );
}

export default Invitations;
