import { create } from "zustand";

const defaultNotifications = [
  "🎉 New investment opportunity available! High-yield bonds with 8% annual return",
  "📈 Your portfolio value increased by 15% this month. Great job on your investment strategy!",
  "💰 Monthly dividend payment of $1,250 has been credited to your account",
  "🔔 System maintenance scheduled for tonight at 2 AM UTC. Service interruption expected for 30 minutes",
  "📊 New market analysis report available. Key insights: Tech sector showing strong growth potential",
  "🎯 Investment goal achieved! You've reached your target of $50,000 in portfolio value",
  "📱 App update available. New features include: Dark mode, Portfolio analytics, and Investment recommendations",
  "📨 New message from your advisor: 'Let's review your investment strategy next week'",
];

export const useNotificationStore = create((set) => ({
  notifications: defaultNotifications,
  addNotification: (notification) =>
    set((state) => ({
      notifications: [notification, ...state.notifications],
    })),
  removeNotification: (index) =>
    set((state) => ({
      notifications: state.notifications.filter((_, i) => i !== index),
    })),
  clearNotifications: () => set({ notifications: [] }),
}));
