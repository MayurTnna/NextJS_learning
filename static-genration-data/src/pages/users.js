import Userlist from "@/components/userlist";

function Users({ users }) {
  return (
    <>
      <div>
        users:-
        {users.map((user) => {
          return (
            <div key={user.id}>
              <p>{user.name}</p>
              <p>{user.username}</p>
              <p>{user.email}</p>

              <p>-----------------------</p>
              <Userlist user={user} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: { users: data },
  };
}

//   getStaticProps function returns an object with the props key.
// Any <Link /> component in the viewport (initially or through scroll) will be prefetched by default
//                (including the corresponding data) for pages using Static Generation
//  
