import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../../components/WithSpinner";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selector";
import CollectionPage from "./index";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
