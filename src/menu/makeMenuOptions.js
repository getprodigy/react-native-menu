module.exports = (React, ReactNative, { styles }) => {
  const { TouchableWithoutFeedback, View, ListView } = ReactNative;

  const MenuOptions = React.createClass({
    displayName: 'MenuOptions',
    onSelect(value) {
      this.props.onSelect(value);
    },
    render() {
      const childrenMap = {};
      (this.props.children || []).forEach(v => {
        childrenMap[v.key] = v;
      });
      const dataSource = new ListView
        .DataSource({ rowHasChanged: (r1, r2) => false })
        .cloneWithRows(this.props.children.map(v => v.key));
      return (
        <TouchableWithoutFeedback
          accessible={false}
          testID="MenuOptionsContainer"
          style={[styles.options, this.props.style]}>
          <ListView
            dataSource={dataSource}
            renderRow={v => React.cloneElement(childrenMap[v], { onPress: this.onSelect })}
          />
        </TouchableWithoutFeedback>
      );
    }
  });

  return MenuOptions;
};
