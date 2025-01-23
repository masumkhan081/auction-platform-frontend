"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function page() {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div>admin-age</div>
    )
}
