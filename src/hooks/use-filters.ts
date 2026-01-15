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
  const [filters, setFilters] = useState<FilterOptions>({
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
  });

  // Load filters from URL on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const urlFilters: Partial<FilterOptions> = {};
      
      urlParams.forEach((value, key) => {
        if (key in filters) {
          urlFilters[key as keyof FilterOptions] = value;
        }
      });
      
      setFilters(prev => ({ ...prev, ...urlFilters }));
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
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const companyName = item.company || item.agency || '';
        const matchesSearch = 
          item.title.toLowerCase().includes(searchLower) ||
          companyName.toLowerCase().includes(searchLower) ||
          item.skills.some(skill => skill.toLowerCase().includes(searchLower));
        
        if (!matchesSearch) return false;
      }

      // Location filter
      if (filters.location && item.location !== filters.location) {
        return false;
      }

      // Type filter
      if (filters.type && item.type && item.type !== filters.type) {
        return false;
      }

      // Category filter (jobs)
      if (type === 'jobs' && filters.category) {
        // This would need to be implemented based on your data structure
        // For now, we'll use a simple keyword match in title/description
        if (!item.title.toLowerCase().includes(filters.category.toLowerCase())) {
          return false;
        }
      }

      // Salary filter (jobs, govt-jobs)
      if ((type === 'jobs' || type === 'govt-jobs') && filters.salary && item.salary) {
        const salaryRange = filters.salary;
        const itemSalary = item.salary;
        
        if (salaryRange === '$0-50k' && !itemSalary.includes('0-50') && !itemSalary.includes('30-50') && !itemSalary.includes('40-50')) {
          return false;
        }
        if (salaryRange === '$50-75k' && !itemSalary.includes('50-75') && !itemSalary.includes('60-70')) {
          return false;
        }
        if (salaryRange === '$75-100k' && !itemSalary.includes('75-100') && !itemSalary.includes('80-90')) {
          return false;
        }
        if (salaryRange === '$100-150k' && !itemSalary.includes('100-150') && !itemSalary.includes('120-150')) {
          return false;
        }
        if (salaryRange === '$150k+' && !itemSalary.includes('150') && !itemSalary.includes('160') && !itemSalary.includes('180') && !itemSalary.includes('200')) {
          return false;
        }
      }

      // Duration filter (internships)
      if (type === 'internships' && filters.duration && item.duration) {
        if (!item.duration.includes(filters.duration)) {
          return false;
        }
      }

      // Stipend filter (internships)
      if (type === 'internships' && filters.stipend && item.stipend) {
        const stipendRange = filters.stipend;
        const itemStipend = item.stipend;
        
        if (stipendRange === '$0-1000/month' && !itemStipend.includes('500') && !itemStipend.includes('800') && !itemStipend.includes('1000')) {
          return false;
        }
        if (stipendRange === '$1000-2000/month' && !itemStipend.includes('1500') && !itemStipend.includes('1800') && !itemStipend.includes('2000')) {
          return false;
        }
        if (stipendRange === '$2000-3000/month' && !itemStipend.includes('2500') && !itemStipend.includes('3000')) {
          return false;
        }
        if (stipendRange === '$3000+/month' && !itemStipend.includes('3000') && !itemStipend.includes('3500') && !itemStipend.includes('4000')) {
          return false;
        }
      }

      // Field filter (scholarships)
      if (type === 'scholarships' && filters.field) {
        if (!item.title.toLowerCase().includes(filters.field.toLowerCase())) {
          return false;
        }
      }

      // Amount filter (scholarships)
      if (type === 'scholarships' && filters.amount && item.amount) {
        const amountRange = filters.amount;
        const itemAmount = item.amount;
        
        if (amountRange === '$0-1000' && !itemAmount.includes('500') && !itemAmount.includes('1000')) {
          return false;
        }
        if (amountRange === '$1000-5000' && !itemAmount.includes('2000') && !itemAmount.includes('3000') && !itemAmount.includes('5000')) {
          return false;
        }
        if (amountRange === '$5000-10000' && !itemAmount.includes('8000') && !itemAmount.includes('10000')) {
          return false;
        }
        if (amountRange === '$10000+' && !itemAmount.includes('15000') && !itemAmount.includes('20000') && !itemAmount.includes('25000')) {
          return false;
        }
      }

      // Department filter (govt-jobs)
      if (type === 'govt-jobs' && filters.department) {
        if (!item.title.toLowerCase().includes(filters.department.toLowerCase())) {
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
    setFilters({
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
    });
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