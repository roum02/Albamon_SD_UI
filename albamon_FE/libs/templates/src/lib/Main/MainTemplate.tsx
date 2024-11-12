import { MainBanner } from '@components/lib';

interface NextRequestInit extends RequestInit {
  next?: {
    revalidate: number;
  };
}

export const MainTemplate = () => {
  const fetchCards = async () => {
    const query = `
    query GetCards {
      getCards {
        resultCode
        resultMessage
        totalCount
        row
        column
        collection {
          franchiseCode
          franchiseName
          franchiseLogo
          keywordCode
          keywordName
          partCode
          partName
        }
      }
    }
  `;
    const response = await fetch('https://albamon-sd-ui.onrender.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 10 },
    } as NextRequestInit);

    const data = await response.json();
    return data;
  };

  // Example usage
  fetchCards()
    .then((data) => console.log(data))
    .catch((error) => console.error('Error fetching cards:', error));

  return (
    <div>
      <MainBanner />
      <h1>main card list</h1>
    </div>
  );
};
