/**
 * Application-wide constants and configuration
 */

/**
 * View options for the main navigation
 * Each view represents a different data visualization or info page
 */
export const VIEW_OPTIONS = [
  { key: 'home' as const, label: 'Startseite' },
  { key: 'retention' as const, label: 'Klassenwiederholung' },
  { key: 'trends' as const, label: 'Zeitverlauf' },
  { key: 'sex' as const, label: 'Geschlecht' },
  { key: 'migration' as const, label: 'Migration' },
  { key: 'data' as const, label: 'Info' },
] as const

/**
 * View metadata: titles and descriptions for each view
 */
export const VIEW_METADATA: Record<
  (typeof VIEW_OPTIONS)[number]['key'],
  string
> = {
  home: 'Klassenwiederholung',
  retention: 'Klassenwiederholungen pro Schuljahr',
  trends: 'Klassenwiederholungen im Zeitverlauf',
  sex: 'Klassenwiederholungen nach Geschlecht',
  migration: 'Klassenwiederholungen nach Herkunft',
  data: 'Über diese App',
}

/**
 * CSS class name prefixes and selectors
 * Using BEM-like naming convention
 */
export const CLASS_NAMES = {
  root: 'bycs-mfe',
  panel: 'bycs-mfe__panel',
  viewSwitch: 'bycs-mfe__view-switch',
  viewTab: 'bycs-mfe__view-tab',
  viewTabActive: 'bycs-mfe__view-tab--active',
  panelHeader: 'bycs-mfe__panel-header',
  explorerLayout: 'bycs-mfe__explorer-layout',
  explorerLeft: 'bycs-mfe__explorer-left',
  chartCard: 'bycs-mfe__chart-card',
  cardHeading: 'bycs-mfe__card-heading',
  controlsSection: 'bycs-mfe__controls-section',
  controlGroup: 'bycs-mfe__control-group',
} as const

/**
 * ARIA labels for accessibility
 */
export const ARIA_LABELS = {
  viewSwitchNav: 'Ansichtsauswahl',
} as const
