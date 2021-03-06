import * as Mock from '../MockEnvironment';
import { TimespanFacet, ITimespanFacetOptions } from '../../src/ui/TimespanFacet/TimespanFacet';
import { FacetRange } from '../../src/ui/FacetRange/FacetRange';

export function TimespanFacetTest() {
  describe('TimespanFacet', () => {
    let test: Mock.IBasicComponentSetup<TimespanFacet>;

    beforeEach(() => {
      test = Mock.basicComponentSetup<TimespanFacet>(TimespanFacet);
    });

    it('should output a working FacetRange', () => {
      expect(test.cmp.facet instanceof FacetRange).toBeTruthy();
    });

    it('should contains prebuilt ranges', () => {
      expect(test.cmp.ranges).toEqual(
        jasmine.arrayContaining([
          {
            start: jasmine.any(Date),
            end: jasmine.any(Date),
            label: jasmine.any(String),
            endInclusive: false
          }
        ])
      );
    });

    it('should pass prebuilt ranges to the underlying facet', () => {
      expect(test.cmp.ranges).toEqual(test.cmp.facet.options.ranges);
    });

    it('should allow to change the ranges programmatically, and pass them to the underlying facet', () => {
      const matcher = jasmine.arrayContaining([
        jasmine.objectContaining({
          label: 'foo'
        })
      ]);
      expect(test.cmp.facet.options.ranges).not.toEqual(matcher);

      test.cmp.ranges = [
        {
          label: 'foo',
          start: new Date(),
          end: new Date(),
          endInclusive: false
        }
      ];

      expect(test.cmp.facet.options.ranges).toEqual(matcher);
    });

    describe('exposes options', () => {
      it('title should pass the correct title option to the underlying facet', () => {
        test = Mock.optionsComponentSetup<TimespanFacet, ITimespanFacetOptions>(TimespanFacet, {
          title: 'A new title'
        });

        expect(test.cmp.facet.options.title).toBe('A new title');
      });

      it('field should pass the correct field option to the underlying facet', () => {
        test = Mock.optionsComponentSetup<TimespanFacet, ITimespanFacetOptions>(TimespanFacet, {
          field: '@anotherField'
        });

        expect(test.cmp.facet.options.field).toBe('@anotherField');
      });
    });
  });
}
