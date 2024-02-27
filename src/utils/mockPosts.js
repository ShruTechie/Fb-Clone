const mockPosts = [
    {
      id: 1,
      data: {
        profilePic: "profile1.jpg",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        time: "2024-02-27T08:00:00Z",
        username: "user1",
        image: "https://media.istockphoto.com/id/1166613720/photo/sunflower-in-full-bloom-with-blue-sky.jpg?s=2048x2048&w=is&k=20&c=n68AQQDKN7jUV_R6F6PmdZQlmrZ4CxXY3gNG9Ql9Z5c="
      }
    },
    {
      id: 2,
      data: {
        profilePic: "profile2.jpg",
        message: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        time: "2024-02-26T10:30:00Z",
        username: "user2",
        image: "https://images.unsplash.com/photo-1618886487325-f665032b6352?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    },
    {
      id: 3,
      data: {
        profilePic: "profile3.jpg",
        message: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        time: "2024-02-25T14:45:00Z",
        username: "user3",
        image: "https://media.istockphoto.com/id/583818478/photo/woman-praying-and-free-bird-enjoying-nature-on-sunset-background.jpg?s=2048x2048&w=is&k=20&c=XJDGI_NHPegB3hZ7tXz3CGz_XAV3rTbvTpE5_qVBpJI="
      }
    },
    {
      id: 4,
      data: {
        profilePic: "profile4.jpg",
        message: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        time: "2024-02-24T16:20:00Z",
        username: "user4",
        image: "https://plus.unsplash.com/premium_photo-1705091306830-a48579b5433a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    },
    {
      id: 5,
      data: {
        profilePic: "profile5.jpg",
        message: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        time: "2024-02-23T20:15:00Z",
        username: "user5",
        image: "https://images.unsplash.com/photo-1707009504605-a772866ac980?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMDR8fHxlbnwwfHx8fHw%3D"
      }
    },
    {
      id: 6,
      data: {
        profilePic: "profile6.jpg",
        message: "Nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        time: "2024-02-22T09:00:00Z",
        username: "user6",
        image: "https://images.unsplash.com/photo-1705933278878-d069f96a0717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D"
      }
    },
    {
      id: 7,
      data: {
        profilePic: "profile7.jpg",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        time: "2024-02-21T11:30:00Z",
        username: "user7",
        image: "https://images.unsplash.com/photo-1708856109050-6f5f5afdfdd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D"
      }
    },
    {
      id: 8,
      data: {
        profilePic: "profile8.jpg",
        message: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        time: "2024-02-20T13:45:00Z",
        username: "user8",
        image: "https://images.unsplash.com/photo-1708481480582-9793278e36ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"
      }
    },
    {
      id: 9,
      data: {
        profilePic: "profile9.jpg",
        message: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        time: "2024-02-19T17:20:00Z",
        username: "user9",
        image: "https://images.unsplash.com/photo-1708953782453-e7e2d71720c4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    },
    {
      id: 10,
      data: {
        profilePic: "profile10.jpg",
        message: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        time: "2024-02-18T21:15:00Z",
        username: "user10",
        image: "https://images.unsplash.com/photo-1707249696459-9f7acb0df492?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTR8fHxlbnwwfHx8fHw%3D"
      }
    }
  ]

  export default mockPosts;