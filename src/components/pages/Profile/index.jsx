/**
 * TODO: Ticket 3:
 * Implement authentication using Auth0:
 * - Get the user data from Auth0
 * - Create and style the component
 * - Display the data
 * - Make this page a protected Route
 */
 
import { useAuth0 } from "@auth0/auth0-react"; // import auth again

const Profile = () => {
  // TODO: Replace these with functionality from Auth0
  // const isLoading = false;
  // const user = true;

  const { user, isAuthenticated, isLoading} = useAuth0();

  if (isLoading) {
    return <div className='text-center p-4'>Loading...</div>;
  }

  if(!isAuthenticated){
    return <div className='text-center p-4'>You must be logged in to gain access.</div>;
  }

  return (
    <div className="flex flex-col items-center p-8">
      <img
        src={user.picture}
        alt={user.name}
        className="w-24 h-24 rounded-full mb-4"
      />
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p className="text-sm text-gray-600">{user.email}</p>
    </div>  
    );
};

export default Profile;
