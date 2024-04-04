import {create} from 'zustand';
import {Location} from '../../../infrastructure/interfaces/location';
import {
  getCurrentLocation,
  clearWatchLocation,
  watchCurrentLocation,
} from '../../../use-cases/location/location';

interface LocationState {
  lastKnownLocation: Location | null;
  userLocationHistory: Location[];
  watchId: number | null;

  getLocation: () => Promise<Location | null>;
  watchLocation: () => void;
  clearWatchLocation: () => void;
}

export const useLocationStore = create<LocationState>()((set, get) => ({
  lastKnownLocation: null,
  userLocationHistory: [],
  watchId: null,
  getLocation: async () => {
    const location = await getCurrentLocation();
    set({lastKnownLocation: location});
    return location;
  },
  watchLocation: () => {
    const watchId = get().watchId;
    if (watchId !== null) {
      get().clearWatchLocation();
    }
    const newWatchId = watchCurrentLocation(location => {
      set({
        lastKnownLocation: location,
        userLocationHistory: [...get().userLocationHistory, location],
      });

      set({watchId: newWatchId});
    });
  },
  clearWatchLocation: () => {
    const watchId = get().watchId;
    if (watchId !== null) {
      clearWatchLocation(watchId);
    }
  },
}));
