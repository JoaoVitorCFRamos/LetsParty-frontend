import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

type ProtectedRouteType = {
	roleRequired?: "CUSTOMER" | "COMPANY";
};

const ProtectedRoute = (props: ProtectedRouteType) => {
	const { signed, user } = useAuth()

	if (props.roleRequired) {
		return signed ? (
			props.roleRequired === user?.role ? (
				<Outlet />
			) : (
				<Navigate to="/" />
			)
		) : (
			<Navigate to="/" />
		)
	}

	return signed ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoute;