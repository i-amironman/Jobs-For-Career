'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Icons } from '@/components/ui/icons';

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

interface FilterPanelProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  onReset: () => void;
  type: 'jobs' | 'internships' | 'scholarships' | 'govt-jobs';
  resultsCount: number;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  onFiltersChange,
  onReset,
  type,
  resultsCount
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Common filter options
  const locationOptions = [
    'San Francisco, CA',
    'New York, NY',
    'Remote',
    'Los Angeles, CA',
    'Chicago, IL',
    'Seattle, WA',
    'Boston, MA',
    'Austin, TX'
  ];

  const typeOptions = ['Full Time', 'Part Time', 'Contract', 'Internship'];

  // Job-specific options
  const jobCategories = [
    'Technology',
    'Marketing',
    'Design',
    'Sales',
    'Finance',
    'Healthcare',
    'Education',
    'Customer Support'
  ];

  const salaryRanges = [
    '$0-50k',
    '$50-75k',
    '$75-100k',
    '$100-150k',
    '$150k+'
  ];

  // Internship-specific options
  const durationOptions = [
    '3 months',
    '6 months',
    '12 weeks',
    '4 months',
    'Summer',
    'Year Round'
  ];

  const stipendRanges = [
    '$0-1000/month',
    '$1000-2000/month',
    '$2000-3000/month',
    '$3000+/month'
  ];

  // Scholarship-specific options
  const fieldOptions = [
    'Engineering',
    'Business',
    'Design',
    'Marketing',
    'Data Science',
    'Finance',
    'Healthcare',
    'Education'
  ];

  const amountRanges = [
    '$0-1000',
    '$1000-5000',
    '$5000-10000',
    '$10000+'
  ];

  // Govt Jobs specific options
  const departmentOptions = [
    'Technology',
    'Healthcare',
    'Education',
    'Defense',
    'Transportation',
    'Environment',
    'Finance',
    'Administration'
  ];

  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  const handleReset = () => {
    onReset();
    setIsExpanded(false);
  };

  const activeFiltersCount = Object.values(filters).filter(value => 
    value && value.trim() !== ''
  ).length;

  const renderFilterSection = (title: string, options: string[], filterKey: keyof FilterOptions) => (
    <div className="space-y-3">
      <h4 className="font-medium text-foreground">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <Badge
            key={option}
            variant={filters[filterKey] === option ? "default" : "outline"}
            className="cursor-pointer hover:bg-primary/80 transition-colors"
            onClick={() => handleFilterChange(filterKey, filters[filterKey] === option ? '' : option)}
          >
            {option}
          </Badge>
        ))}
      </div>
    </div>
  );

  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Icons.Filter className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Filters</h3>
            {activeFiltersCount > 0 && (
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {activeFiltersCount} active
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {resultsCount} results
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary"
            >
              {isExpanded ? 'Show Less' : 'Show More'}
              <Icons.ChevronDown className={`h-4 w-4 ml-1 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            </Button>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Icons.Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by title, company, or keywords..."
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Always visible filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {renderFilterSection('Location', locationOptions, 'location')}
          {renderFilterSection('Type', typeOptions, 'type')}
        </div>

        {/* Expandable filters */}
        {isExpanded && (
          <div className="space-y-6 border-t pt-6">
            {type === 'jobs' && (
              <>
                {renderFilterSection('Category', jobCategories, 'category')}
                {renderFilterSection('Salary Range', salaryRanges, 'salary')}
              </>
            )}

            {type === 'internships' && (
              <>
                {renderFilterSection('Duration', durationOptions, 'duration')}
                {renderFilterSection('Stipend Range', stipendRanges, 'stipend')}
              </>
            )}

            {type === 'scholarships' && (
              <>
                {renderFilterSection('Field of Study', fieldOptions, 'field')}
                {renderFilterSection('Amount Range', amountRanges, 'amount')}
              </>
            )}

            {type === 'govt-jobs' && (
              <>
                {renderFilterSection('Department', departmentOptions, 'department')}
                {renderFilterSection('Salary Range', salaryRanges, 'salary')}
              </>
            )}
          </div>
        )}

        {/* Reset button */}
        {activeFiltersCount > 0 && (
          <div className="flex justify-center mt-6 pt-6 border-t">
            <Button
              variant="outline"
              onClick={handleReset}
              className="text-muted-foreground hover:text-foreground"
            >
              <Icons.X className="h-4 w-4 mr-2" />
              Clear All Filters
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FilterPanel;