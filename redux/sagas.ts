import { GeneralSaga } from './general/sagas';
import { UISaga } from './ui/sagas';

/**
 * App sagas
 */
const sagas = [new GeneralSaga(), new UISaga()];

export { sagas };
