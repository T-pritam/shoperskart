"use client"
import { useRouter } from 'next/navigation';

function MyComponent() {
  const router = useRouter();

  // Function to handle adding query parameters
  const addQueryParam = () => {
    // Get the current pathname

    // Construct the new URL with query parameters
    const newUrl = `http://localhost:3000?param1=value1&param2=value2`;

    // Push the new URL with query parameters
    router.push(newUrl);
  };

  return (
    <div>
      <button onClick={addQueryParam}>Add Query Params</button>
    </div>
  );
}

export default MyComponent;