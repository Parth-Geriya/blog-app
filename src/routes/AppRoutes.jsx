import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import BlogList from '../pages/BlogList'
import BlogDetail from '../pages/BlogDetail'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<BlogList />} />
      <Route path="/post/:id" element={<BlogDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}