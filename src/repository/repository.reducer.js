import {
  GET_REPOSITORY,
  GET_REPOSITORY_CONTRIBUTORS,
  GET_REPOSITORY_CONTENTS,
  GET_REPOSITORY_ISSUES,
  GET_REPOSITORY_README,
  GET_REPOSITORY_LABELS,
  SEARCH_OPEN_ISSUES,
  SEARCH_CLOSED_ISSUES,
  SEARCH_OPEN_PULLS,
  SEARCH_CLOSED_PULLS
} from './repository.type';

const initialState = {
  repository: {},
  contributors: [],
  labels: [],
  contents: [],
  issues: [],
  readMe: '',
  searchedOpenIssues: [],
  searchedClosedIssues: [],
  searchedOpenPulls: [],
  searchedClosedPulls: [],
  isPendingRepository: false,
  isPendingContributors: false,
  isPendingContents: false,
  isPendingIssues: false,
  isPendingReadMe: false,
  isPendingLabels: false,
  isPendingSearchOpenIssues: false,
  isPendingSearchClosedIssues: false,
  isPendingSearchOpenPulls: false,
  isPendingSearchClosedPulls: false,
  error: '',
}

export default function repositoryReducer(state = initialState, action={}) {
  switch (action.type) {
      case GET_REPOSITORY.PENDING:
        return {
          ...state,
          issues: [],
          isPendingRepository: true,
        };
      case GET_REPOSITORY.SUCCESS:
        return {
          ...state,
          repository: action.payload,
          isPendingRepository: false,
        };
      case GET_REPOSITORY.ERROR:
        return {
          ...state,
          error: action.payload,
          isPendingRepository: false,
        };
      case GET_REPOSITORY_CONTRIBUTORS.PENDING:
        return {
          ...state,
          isPendingContributors: true,
        };
      case GET_REPOSITORY_CONTRIBUTORS.SUCCESS:
        return {
          ...state,
          contributors: action.payload,
          isPendingContributors: false,
        };
      case GET_REPOSITORY_CONTRIBUTORS.ERROR:
        return {
          ...state,
          error: action.payload,
          isPendingContributors: false,
        };
      case GET_REPOSITORY_CONTENTS.PENDING:
        return {
          ...state,
          isPendingContents: true,
        };
      case GET_REPOSITORY_CONTENTS.SUCCESS:
        return {
          ...state,
          contents: action.payload,
          isPendingContents: false,
        };
      case GET_REPOSITORY_CONTENTS.ERROR:
        return {
          ...state,
          error: action.payload,
          isPendingContents: false,
        };
      case GET_REPOSITORY_ISSUES.PENDING:
        return {
          ...state,
          isPendingIssues: true,
        };
      case GET_REPOSITORY_ISSUES.SUCCESS:
        return {
          ...state,
          issues: action.payload,
          isPendingIssues: false,
        };
      case GET_REPOSITORY_ISSUES.ERROR:
        return {
          ...state,
          error: action.payload,
          isPendingIssues: false,
        };
      case GET_REPOSITORY_README.PENDING:
        return {
          ...state,
          isPendingReadMe: true,
        };
      case GET_REPOSITORY_README.SUCCESS:
        return {
          ...state,
          readMe: action.payload,
          isPendingReadMe: false,
        };
      case GET_REPOSITORY_README.ERROR:
        return {
          ...state,
          error: action.payload,
          isPendingReadMe: false,
        };
      case GET_REPOSITORY_LABELS.PENDING:
        return {
          ...state,
          isPendingLabels: true,
        };
      case GET_REPOSITORY_LABELS.SUCCESS:
        return {
          ...state,
          labels: action.payload,
          isPendingLabels: false,
        };
      case GET_REPOSITORY_LABELS.ERROR:
        return {
          ...state,
          error: action.payload,
          isPendingLabels: false,
        };
      case SEARCH_OPEN_ISSUES.PENDING:
        return {
          ...state,
          searchedOpenIssues: [],
          isPendingSearchOpenIssues: true,
        };
      case SEARCH_OPEN_ISSUES.SUCCESS:
        return {
          ...state,
          searchedOpenIssues: action.payload,
          isPendingSearchOpenIssues: false,
        };
      case SEARCH_OPEN_ISSUES.ERROR:
        return {
          ...state,
          error: action.payload,
          isPendingSearchOpenIssues: false,
        };
      case SEARCH_CLOSED_ISSUES.PENDING:
        return {
          ...state,
          searchedClosedIssues: [],
          isPendingSearchClosedIssues: true,
        };
      case SEARCH_CLOSED_ISSUES.SUCCESS:
        return {
          ...state,
          searchedClosedIssues: action.payload,
          isPendingSearchClosedIssues: false,
        };
      case SEARCH_CLOSED_ISSUES.ERROR:
        return {
          ...state,
          error: action.payload,
          isPendingSearchClosedIssues: false,
        };
      case SEARCH_OPEN_PULLS.PENDING:
        return {
          ...state,
          searchedOpenPulls: [],
          isPendingSearchOpenPulls: true,
        };
      case SEARCH_OPEN_PULLS.SUCCESS:
        return {
          ...state,
          searchedOpenPulls: action.payload,
          isPendingSearchOpenPulls: false,
        };
      case SEARCH_OPEN_PULLS.ERROR:
        return {
          ...state,
          error: action.payload,
          isPendingSearchOpenPulls: false,
        };
      case SEARCH_CLOSED_PULLS.PENDING:
        return {
          ...state,
          searchedClosedPulls: [],
          isPendingSearchClosedPulls: true,
        };
      case SEARCH_CLOSED_PULLS.SUCCESS:
        return {
          ...state,
          searchedClosedPulls: action.payload,
          isPendingSearchClosedPulls: false,
        };
      case SEARCH_CLOSED_PULLS.ERROR:
        return {
          ...state,
          error: action.payload,
          isPendingSearchClosedPulls: false,
        };
      default:
        return state;
  }
}
