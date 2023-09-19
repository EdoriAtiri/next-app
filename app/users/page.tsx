import React from 'react'

interface User {
  id: string
  name: string
}

const UsersPage = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users',
    // {
    // Enable caching and refetch data every 10 seconds - will build the page as static page during build time
    // next: { revalidate: 10 },
    // },
    // Disable caching - allows dynamic rendering
    { cache: 'no-store' }
  )
  const users: User[] = await res.json()

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default UsersPage
