'use client';

import { useState, useEffect, useMemo } from 'react';

export interface FilterOptions {
  search: string;
  location: string;
  type: string;
  category?: string;
  salary?: string;
  duration?: string;
  stipend?: string;
  field?: string;
  amount?: string;
  department?: string;
}

export interface FilterableItem {
  id: string;
  title: string;
  company?: string;
  agency?: string;
  location: string;
  type?: string;
  salary?: string;
  duration?: string;
  stipend?: string;
  field?: string;
  amount?: string;
  department?: string;
  skills: string[];
  posted?: string;
  featured?: boolean;
}

export const useFilters = <T extends FilterableItem>(
  items: T[],
  type: 'jobs' | 'internships' | 'scholarships' | 'govt-jobs'
) => {
  // Initialize filters with default values
  const defaultFilters = {
    search: '',
    location: '',
    type: '',
    category: '',
    salary: '',
    duration: '',
    stipend: '',
    field: '',
    amount: '',
    department: ''
  };

  const [filters, setFilters] = useState<FilterOptions>(defaultFilters);

  // Load URL parameters on mount and when filters change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Load URL parameters on mount
      const urlParams = new URLSearchParams(window.location.search);
      const urlFilters: Partial<FilterOptions> = {};
      
      urlParams.forEach((value, key) => {
        if (key in defaultFilters) {
          urlFilters[key as keyof FilterOptions] = value;
        }
      });
      
      if (Object.keys(urlFilters).length > 0) {
        setFilters({ ...defaultFilters, ...urlFilters });
      }
    }
  }, []);

  // Update URL when filters change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams();
      
      Object.entries(filters).forEach(([key, value]) => {
        if (value && value.trim() !== '') {
          urlParams.set(key, value);
        }
      });
      
      const newUrl = `${window.location.pathname}${urlParams.toString() ? '?' + urlParams.toString() : ''}`;
      window.history.replaceState({}, '', newUrl);
    }
  }, [filters]);

  // Filter logic
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Search filter
      if (filters.search && filters.search.trim() !== '') {
        const searchLower = filters.search.toLowerCase().trim();
        const companyName = item.company || item.agency || '';
        const matchesSearch = 
          item.title.toLowerCase().includes(searchLower) ||
          companyName.toLowerCase().includes(searchLower) ||
          item.skills.some(skill => skill.toLowerCase().includes(searchLower));
        
        if (!matchesSearch) return false;
      }

      // Location filter
      if (filters.location && filters.location.trim() !== '') {
        if (item.location !== filters.location) {
          return false;
        }
      }

      // Type filter
      if (filters.type && filters.type.trim() !== '') {
        if (item.type !== filters.type) {
          return false;
        }
      }

      // Category filter (jobs)
      if (type === 'jobs' && filters.category && filters.category.trim() !== '') {
        // Use a more flexible matching for category
        const categoryLower = filters.category.toLowerCase();
        const titleLower = item.title.toLowerCase();
        const skillsLower = item.skills.join(' ').toLowerCase();
        
        if (!titleLower.includes(categoryLower) && !skillsLower.includes(categoryLower)) {
          return false;
        }
      }

      // Salary filter (jobs, govt-jobs)
      if ((type === 'jobs' || type === 'govt-jobs') && filters.salary && filters.salary.trim() !== '' && item.salary) {
        const salaryRange = filters.salary;
        const itemSalary = item.salary.toLowerCase();
        
        // Extract numbers from salary string for better matching
        const salaryNumbers = itemSalary.match(/\d+/g);
        if (salaryNumbers) {
          const maxSalary = Math.max(...salaryNumbers.map(Number));
          
          if (salaryRange === '$0-50k' && maxSalary > 50) {
            return false;
          }
          if (salaryRange === '$50-75k' && (maxSalary < 50 || maxSalary > 75)) {
            return false;
          }
          if (salaryRange === '$75-100k' && (maxSalary < 75 || maxSalary > 100)) {
            return false;
          }
          if (salaryRange === '$100-150k' && (maxSalary < 100 || maxSalary > 150)) {
            return false;
          }
          if (salaryRange === '$150k+' && maxSalary < 150) {
            return false;
          }
        }
      }

      // Duration filter (internships)
      if (type === 'internships' && filters.duration && filters.duration.trim() !== '' && item.duration) {
        const durationFilter = filters.duration.toLowerCase();
        const itemDuration = item.duration.toLowerCase();
        
        if (!itemDuration.includes(durationFilter)) {
          return false;
        }
      }

      // Stipend filter (internships)
      if (type === 'internships' && filters.stipend && filters.stipend.trim() !== '' && item.stipend) {
        const stipendRange = filters.stipend;
        const itemStipend = item.stipend.toLowerCase();
        
        // Extract numbers from stipend string
        const stipendNumbers = itemStipend.match(/\d+/g);
        if (stipendNumbers) {
          const maxStipend = Math.max(...stipendNumbers.map(Number));
          
          if (stipendRange === '$0-1000/month' && maxStipend > 1000) {
            return false;
          }
          if (stipendRange === '$1000-2000/month' && (maxStipend < 1000 || maxStipend > 2000)) {
            return false;
          }
          if (stipendRange === '$2000-3000/month' && (maxStipend < 2000 || maxStipend > 3000)) {
            return false;
          }
          if (stipendRange === '$3000+/month' && maxStipend < 3000) {
            return false;
          }
        }
      }

      // Field filter (scholarships)
      if (type === 'scholarships' && filters.field && filters.field.trim() !== '') {
        const fieldLower = filters.field.toLowerCase();
        const titleLower = item.title.toLowerCase();
        const skillsLower = item.skills.join(' ').toLowerCase();
        
        if (!titleLower.includes(fieldLower) && !skillsLower.includes(fieldLower)) {
          return false;
        }
      }

      // Amount filter (scholarships)
      if (type === 'scholarships' && filters.amount && filters.amount.trim() !== '' && item.amount) {
        const amountRange = filters.amount;
        const itemAmount = item.amount.toLowerCase();
        
        // Extract numbers from amount string
        const amountNumbers = itemAmount.match(/\d+/g);
        if (amountNumbers) {
          const maxAmount = Math.max(...amountNumbers.map(Number));
          
          if (amountRange === '$0-1000' && maxAmount > 1000) {
            return false;
          }
          if (amountRange === '$1000-5000' && (maxAmount < 1000 || maxAmount > 5000)) {
            return false;
          }
          if (amountRange === '$5000-10000' && (maxAmount < 5000 || maxAmount > 10000)) {
            return false;
          }
          if (amountRange === '$10000+' && maxAmount < 10000) {
            return false;
          }
        }
      }

      // Department filter (govt-jobs)
      if (type === 'govt-jobs' && filters.department && filters.department.trim() !== '') {
        const departmentLower = filters.department.toLowerCase();
        const titleLower = item.title.toLowerCase();
        const skillsLower = item.skills.join(' ').toLowerCase();
        
        if (!titleLower.includes(departmentLower) && !skillsLower.includes(departmentLower)) {
          return false;
        }
      }

      return true;
    });
  }, [items, filters, type]);

  const updateFilters = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  const resetFilters = () => {
    setFilters(defaultFilters);
  };

  const hasActiveFilters = useMemo(() => {
    return Object.values(filters).some(value => value && value.trim() !== '');
  }, [filters]);

  return {
    filters,
    filteredItems,
    updateFilters,
    resetFilters,
    hasActiveFilters,
    resultsCount: filteredItems.length
  };
};