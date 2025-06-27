'use client'
import { useState } from 'react'

interface ActivityFilterProps {
  tabs: {
    [key: string]: string
  }
  onFilterChange: (filter: string) => void
  currentFilter: string
}

export default function ActivityFilter({ tabs, onFilterChange, currentFilter }: ActivityFilterProps) {
  return (
      <div className="mb-12 flex justify-center space-x-4">
        {Object.entries(tabs).map(([key, label]) => (
            <button
                key={key}
                onClick={() => onFilterChange(key)}
                className={`rounded-full px-6 py-2 shadow-md transition
            ${currentFilter === key
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-gray-600 hover:bg-green-500 hover:text-white'
                }`}
            >
              {label}
            </button>
        ))}
      </div>
  )
}
