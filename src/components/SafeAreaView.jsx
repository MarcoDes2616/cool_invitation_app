import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const SafeAreaView = ({ 
  children, 
  style, 
  edges = ['top', 'bottom', 'left', 'right'] 
}) => {
  const insets = useSafeAreaInsets();
  const safeArea = {
    top: insets.top,
    bottom: insets.bottom,
    left: insets.left,
    right: insets.right,
  };
  
  const paddingStyle = {};
  
  if (edges.includes('top')) paddingStyle.paddingTop = insets.top;
  if (edges.includes('bottom')) paddingStyle.paddingBottom = insets.bottom;
  if (edges.includes('left')) paddingStyle.paddingLeft = insets.left;
  if (edges.includes('right')) paddingStyle.paddingRight = insets.right;

  return (
    <View style={[paddingStyle, style]}>
      {children}
    </View>
  );
};
