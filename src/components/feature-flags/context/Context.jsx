import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import featureFlagsDataServiceCall from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagsGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  const fetchFeatureFlags = async () => {
    try {
      setLoading(true);
      const response = await featureFlagsDataServiceCall();
      setLoading(false);
      setEnabledFlags(response);
    } catch (error) {
      console.log(error);
      setLoading(false);
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <FeatureFlagsContext.Provider value={{ loading, enabledFlags }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}
FeatureFlagsGlobalState.propTypes = {
  children: PropTypes.node,
};
