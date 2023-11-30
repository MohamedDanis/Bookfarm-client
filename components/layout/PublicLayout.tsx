import LocalStorage from "@/utils/helper/localStorage";
import { useRouter } from "next/navigation";
function PublicRoute(props:any) {
    const router = useRouter();
    LocalStorage.getItem('token').then((token) => {
        console.log("token333", token);
        if (token) {
          router.push('/admin/dashboard');
          return null;
        }
      });
    return props.children
}

export default PublicRoute;