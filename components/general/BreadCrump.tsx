import { useRouter } from 'next/router';
import Link from 'next/link';
import { ChevronRightIcon, HomeIcon } from '@radix-ui/react-icons';
import { Home, LucideSkipBack, SendToBack, SkipBackIcon, StepBack } from 'lucide-react';
import { useEffect, useState } from 'react';
import { userDetails } from '@/api/admin/userRequests';

const Breadcrumb = ({terminalPath}:any) => {
  const router = useRouter();
  const { asPath } = router;
  const pathSegments = asPath.split('/').filter((segment) => segment);
  const [breadcrumbSegments, setBreadcrumbSegments] = useState<string[]>(pathSegments);
  console.log(terminalPath);
  
  useEffect(() => {
    // Split the current path into an array of segments
    

    // Fetch data associated with the MongoDB ID (pathSegments[pathSegments.length - 1])
    // Replace the last segment with the name fetched from your API or database
   
    const fetchName = async () => {
        const id = pathSegments[pathSegments.length - 1]; // MongoDB ID
        try {
            pathSegments[pathSegments.length - 1] = terminalPath;
            setBreadcrumbSegments(pathSegments);
            console.log(breadcrumbSegments);
        } catch (error) {
            console.error('Error fetching data:', error);
            setBreadcrumbSegments(pathSegments); // Use the ID if fetching fails
        }
    };

    fetchName();
  }, [asPath]);
  console.log(breadcrumbSegments);
  
  return (
    <div className='flex items-center m-6'>
      <Link href="/">
        <Home size={20} /> {/* Use the home icon */}
      </Link>
      {breadcrumbSegments.map((segment, index) => (
        <span key={segment}>
          <ChevronRightIcon className='inline-block'/> {/* Use a separator icon (e.g., chevron right) */}
          <Link href={`/${breadcrumbSegments.slice(0, index + 1).join('/')}`}>
            {segment} {/* Use the segment name or ID */}
          </Link>
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
