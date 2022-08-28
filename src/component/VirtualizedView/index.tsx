import React from 'react';
import {FlatList} from 'react-native';

const VirtualizedView = (props: any) => {
  return (
    <FlatList
      data={[]}
      ListEmptyComponent={null}
      keyExtractor={() => 'dummy'}
      renderItem={null}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => (
        <React.Fragment>{props.children}</React.Fragment>
      )}
    />
  );
};

export default VirtualizedView;
