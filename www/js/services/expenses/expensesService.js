angular.module('app')

.factory('ExpensesService', function() {
  return {
    query: function() {
      return [
        {
          id: 1,
          category: 'Food',
          type: 1, // 1: Personal, 2: Collective
          description: null,
          amount: 10,
        },
        {
          id: 2,
          category: 'Internet',
          type: 2,
          description: 'Unlimited Data Plan',
          amount: 40,
        },
        {
          id: 3,
          category: 'Food',
          type: 2,
          description: null,
          amount: 105,
        },
        {
          id: 4,
          category: 'Other',
          type: 1,
          description: 'FIFA 16',
          amount: 70,
        },
      ];
    },
  };
});
