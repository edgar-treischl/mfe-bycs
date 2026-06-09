import { memo } from 'react'
import { SCHOOL_YEARS, type SchoolYear } from '../../retention.ts'
import { SelectIcon } from '../icons/SelectIcon'

type YearSelectProps = {
  selectedYear: SchoolYear
  onYearChange: (year: SchoolYear) => void
  label?: string
}

/**
 * Year selector dropdown component
 * 
 * @param selectedYear - Currently selected school year
 * @param onYearChange - Callback when year selection changes
 * @param label - Optional custom label for the control
 */
function YearSelectComponent({
  selectedYear,
  onYearChange,
  label = 'Wählen Sie ein Schuljahr:',
}: YearSelectProps) {
  return (
    <div className="class-retention-mfe__control-group">
      <div className="class-retention-mfe__control-label">
        <SelectIcon />
        <span>{label}</span>
      </div>
      <div className="class-retention-mfe__control-pair">
        <label htmlFor="year-select" className="class-retention-mfe__control-short-label">
          Schuljahr
        </label>
        <select
          id="year-select"
          className="class-retention-mfe__control-select"
          value={selectedYear}
          onChange={(e) => onYearChange(e.target.value as SchoolYear)}
        >
          {SCHOOL_YEARS.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export const YearSelect = memo(YearSelectComponent)
