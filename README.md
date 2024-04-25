# React Card Component

## Description
This is a reusable Card component for React applications. It can be used to display information in a well-structured and visually appealing way.

## Installation
Clone the repository and run the following command to install the dependencies:

```bash
npm install
npm run dev

```

## Usage
To use the Card component, you can import it into your React application and pass the necessary props. Here is an example of how you can use the Card component:

```jsx
import ProfilComponent from './Components/ProfileComponent'

function App() {

  // Profile Crad Component
  return (
    <>
      <ProfilComponent
        name="John Doe"
        location="London, UK"
        coverImg="/coverImg.jpg"
        profileImg="/profileImg.png"
        followers="1.5K"
        likes="2.5K"
        photos="3.5K"
      />
    </>
  )
}

export default App;
```

## Props

The Card component accepts the following props:

- `name` (string): The name of the person or entity.
- `location` (string): The location of the person or entity.
- `coverImg` (string): The URL of the cover image.
- `profileImg` (string): The URL of the profile image.
- `followers` (string): The number of followers.
- `likes` (string): The number of likes.
- `photos` (string): The number of photos.


## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
