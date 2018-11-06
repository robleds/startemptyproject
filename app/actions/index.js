import * as AuthActions from './a_auth'
import { bindActionCreators } from 'redux';

export const ActionCreators = Object.assign({},
    AuthActions,
)

export function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch)
}