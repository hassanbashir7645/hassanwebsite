import React from 'react';
import { Users, CheckSquare, Building2, Award } from 'lucide-react';

import { useHR } from '../contexts/HRContext';
import Card from '../components/Card';

const Analytics: React.FC = () => {
  const { employees = [], departments = [], tasks = [], recognitions = [], onboarding = [] } = useHR();

  // Counts
  const totalEmployees = employees.length;
  const totalDepartments = departments.length;
  const totalTasks = tasks.length;
  const totalRecognitions = recognitions.length;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Analytics Dashboard</h1>
        <p className="text-purple-100">Get insights into your organization's performance</p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Employees</p>
              <p className="text-3xl font-bold text-blue-600">{totalEmployees}</p>
            </div>
            <div className="bg-blue-600 p-3 rounded-lg">
              <Users className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Departments</p>
              <p className="text-3xl font-bold text-purple-600">{totalDepartments}</p>
            </div>
            <div className="bg-purple-600 p-3 rounded-lg">
              <Building2 className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Tasks</p>
              <p className="text-3xl font-bold text-green-600">{totalTasks}</p>
            </div>
            <div className="bg-green-600 p-3 rounded-lg">
              <CheckSquare className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Recognitions</p>
              <p className="text-3xl font-bold text-orange-600">{totalRecognitions}</p>
            </div>
            <div className="bg-orange-600 p-3 rounded-lg">
              <Award className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>
      </div>

      {/* Onboarding Section */}
      {onboarding.length > 0 && (
        <Card className="p-6 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Onboarding Overview</h2>
          <p className="text-gray-700">{onboarding.length} employees in onboarding process</p>
        </Card>
      )}
    </div>
  );
};

export default Analytics;
