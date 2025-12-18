import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useRole = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {Loading: roleLoading ,data: role } = useQuery({
        queryKey: ['user-role',user?.email],
        enabled:!!user.email,
        queryFn: async() =>{
            const res = await axiosSecure.get(`/users/${user?.email}/role`);
            console.log('from userole', res.data.rule)
            return res.data?.role;
            
            
        }
    })
    console.log(role)

    return {role, roleLoading}
};

export default useRole;