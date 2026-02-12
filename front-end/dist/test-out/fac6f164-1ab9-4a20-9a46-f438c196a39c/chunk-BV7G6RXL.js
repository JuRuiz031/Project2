import {
  AsyncPipe,
  NgClass,
  NgStyle,
  NgTemplateOutlet,
  SlicePipe,
  formatDate,
  init_common,
  isPlatformBrowser
} from "./chunk-EGU5GLVS.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  LOCALE_ID,
  NgModule,
  NgZone,
  Observable,
  Output,
  PLATFORM_ID,
  Pipe,
  Renderer2,
  RendererFactory2,
  ReplaySubject,
  Subject,
  ViewChild,
  ViewContainerRef,
  combineLatest,
  count,
  distinctUntilChanged,
  effect,
  filter,
  fromEvent,
  init_core,
  init_esm,
  init_operators,
  inject,
  input,
  interval,
  map,
  merge,
  mergeMap,
  of,
  output,
  pairwise,
  setClassMetadata,
  share,
  signal,
  startWith,
  switchMap,
  take,
  takeLast,
  takeUntil,
  tap,
  timer,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵanimateLeave,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵpureFunction7,
  ɵɵpureFunctionV,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-5EHNMWHP.js";
import {
  __esm,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-FYSHOF5T.js";

// node_modules/positioning/dist/positioning.js
function positionElements(hostElement, targetElement, placement, appendToBody, baseClass) {
  let placementVals = Array.isArray(placement) ? placement : placement.split(placementSeparator);
  const allowedPlacements = [
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right",
    "left-top",
    "left-bottom",
    "right-top",
    "right-bottom"
  ];
  const classList = targetElement.classList;
  const addClassesToTarget = (targetPlacement) => {
    const [primary, secondary] = targetPlacement.split("-");
    const classes = [];
    if (baseClass) {
      classes.push(`${baseClass}-${primary}`);
      if (secondary) {
        classes.push(`${baseClass}-${primary}-${secondary}`);
      }
      classes.forEach((classname) => {
        classList.add(classname);
      });
    }
    return classes;
  };
  if (baseClass) {
    allowedPlacements.forEach((placementToRemove) => {
      classList.remove(`${baseClass}-${placementToRemove}`);
    });
  }
  let hasAuto = placementVals.findIndex((val) => val === "auto");
  if (hasAuto >= 0) {
    allowedPlacements.forEach(function(obj) {
      if (placementVals.find((val) => val.search("^" + obj) !== -1) == null) {
        placementVals.splice(hasAuto++, 1, obj);
      }
    });
  }
  const style = targetElement.style;
  style.position = "absolute";
  style.top = "0";
  style.left = "0";
  style["will-change"] = "transform";
  let testPlacement;
  let isInViewport = false;
  for (testPlacement of placementVals) {
    let addedClasses = addClassesToTarget(testPlacement);
    if (positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody)) {
      isInViewport = true;
      break;
    }
    if (baseClass) {
      addedClasses.forEach((classname) => {
        classList.remove(classname);
      });
    }
  }
  if (!isInViewport) {
    testPlacement = placementVals[0];
    addClassesToTarget(testPlacement);
    positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody);
  }
  return testPlacement;
}
var Positioning, placementSeparator, positionService;
var init_positioning = __esm({
  "node_modules/positioning/dist/positioning.js"() {
    "use strict";
    Positioning = class {
      getAllStyles(element) {
        return window.getComputedStyle(element);
      }
      getStyle(element, prop) {
        return this.getAllStyles(element)[prop];
      }
      isStaticPositioned(element) {
        return (this.getStyle(element, "position") || "static") === "static";
      }
      offsetParent(element) {
        let offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
          offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
      }
      position(element, round = true) {
        let elPosition;
        let parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, "position") === "fixed") {
          elPosition = element.getBoundingClientRect();
          elPosition = {
            top: elPosition.top,
            bottom: elPosition.bottom,
            left: elPosition.left,
            right: elPosition.right,
            height: elPosition.height,
            width: elPosition.width
          };
        } else {
          const offsetParentEl = this.offsetParent(element);
          elPosition = this.offset(element, false);
          if (offsetParentEl !== document.documentElement) {
            parentOffset = this.offset(offsetParentEl, false);
          }
          parentOffset.top += offsetParentEl.clientTop;
          parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
          elPosition.top = Math.round(elPosition.top);
          elPosition.bottom = Math.round(elPosition.bottom);
          elPosition.left = Math.round(elPosition.left);
          elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
      }
      offset(element, round = true) {
        const elBcr = element.getBoundingClientRect();
        const viewportOffset = {
          top: window.pageYOffset - document.documentElement.clientTop,
          left: window.pageXOffset - document.documentElement.clientLeft
        };
        let elOffset = {
          height: elBcr.height || element.offsetHeight,
          width: elBcr.width || element.offsetWidth,
          top: elBcr.top + viewportOffset.top,
          bottom: elBcr.bottom + viewportOffset.top,
          left: elBcr.left + viewportOffset.left,
          right: elBcr.right + viewportOffset.left
        };
        if (round) {
          elOffset.height = Math.round(elOffset.height);
          elOffset.width = Math.round(elOffset.width);
          elOffset.top = Math.round(elOffset.top);
          elOffset.bottom = Math.round(elOffset.bottom);
          elOffset.left = Math.round(elOffset.left);
          elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
      }
      /*
        Return false if the element to position is outside the viewport
      */
      positionElements(hostElement, targetElement, placement, appendToBody) {
        const [placementPrimary = "top", placementSecondary = "center"] = placement.split("-");
        const hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        const targetElStyles = this.getAllStyles(targetElement);
        const marginTop = parseFloat(targetElStyles.marginTop);
        const marginBottom = parseFloat(targetElStyles.marginBottom);
        const marginLeft = parseFloat(targetElStyles.marginLeft);
        const marginRight = parseFloat(targetElStyles.marginRight);
        let topPosition = 0;
        let leftPosition = 0;
        switch (placementPrimary) {
          case "top":
            topPosition = hostElPosition.top - (targetElement.offsetHeight + marginTop + marginBottom);
            break;
          case "bottom":
            topPosition = hostElPosition.top + hostElPosition.height;
            break;
          case "left":
            leftPosition = hostElPosition.left - (targetElement.offsetWidth + marginLeft + marginRight);
            break;
          case "right":
            leftPosition = hostElPosition.left + hostElPosition.width;
            break;
        }
        switch (placementSecondary) {
          case "top":
            topPosition = hostElPosition.top;
            break;
          case "bottom":
            topPosition = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
            break;
          case "left":
            leftPosition = hostElPosition.left;
            break;
          case "right":
            leftPosition = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
            break;
          case "center":
            if (placementPrimary === "top" || placementPrimary === "bottom") {
              leftPosition = hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2;
            } else {
              topPosition = hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2;
            }
            break;
        }
        targetElement.style.transform = `translate(${Math.round(leftPosition)}px, ${Math.round(topPosition)}px)`;
        const targetElBCR = targetElement.getBoundingClientRect();
        const html = document.documentElement;
        const windowHeight = window.innerHeight || html.clientHeight;
        const windowWidth = window.innerWidth || html.clientWidth;
        return targetElBCR.left >= 0 && targetElBCR.top >= 0 && targetElBCR.right <= windowWidth && targetElBCR.bottom <= windowHeight;
      }
    };
    placementSeparator = /\s+/;
    positionService = new Positioning();
  }
});

// node_modules/positioning/dist/entry.js
var init_entry = __esm({
  "node_modules/positioning/dist/entry.js"() {
    "use strict";
    init_positioning();
  }
});

// node_modules/calendar-utils/calendar-utils.js
function getExcludedSeconds(dateAdapter, { startDate, seconds, excluded, precision }) {
  if (excluded.length < 1) {
    return 0;
  }
  const { addSeconds: addSeconds2, getDay: getDay2, addDays: addDays2 } = dateAdapter;
  const endDate = addSeconds2(startDate, seconds - 1);
  const dayStart = getDay2(startDate);
  const dayEnd = getDay2(endDate);
  let result = 0;
  let current = startDate;
  while (current < endDate) {
    const day = getDay2(current);
    if (excluded.some((excludedDay) => excludedDay === day)) {
      result += calculateExcludedSeconds(dateAdapter, {
        dayStart,
        dayEnd,
        day,
        precision,
        startDate,
        endDate
      });
    }
    current = addDays2(current, 1);
  }
  return result;
}
function calculateExcludedSeconds(dateAdapter, { precision, day, dayStart, dayEnd, startDate, endDate }) {
  const { differenceInSeconds: differenceInSeconds2, endOfDay: endOfDay2, startOfDay: startOfDay2 } = dateAdapter;
  if (precision === "minutes") {
    if (day === dayStart) {
      return differenceInSeconds2(endOfDay2(startDate), startDate) + 1;
    } else if (day === dayEnd) {
      return differenceInSeconds2(endDate, startOfDay2(endDate)) + 1;
    }
  }
  return SECONDS_IN_DAY;
}
function getWeekViewEventSpan(dateAdapter, { event, offset, startOfWeekDate, excluded, precision, totalDaysInView }) {
  const { max: max2, differenceInSeconds: differenceInSeconds2, addDays: addDays2, endOfDay: endOfDay2, differenceInDays: differenceInDays2 } = dateAdapter;
  let span = SECONDS_IN_DAY;
  const begin = max2([event.start, startOfWeekDate]);
  if (event.end) {
    switch (precision) {
      case "minutes":
        span = differenceInSeconds2(event.end, begin);
        break;
      default:
        span = differenceInDays2(addDays2(endOfDay2(event.end), 1), begin) * SECONDS_IN_DAY;
        break;
    }
  }
  const offsetSeconds = offset * SECONDS_IN_DAY;
  const totalLength = offsetSeconds + span;
  const secondsInView = totalDaysInView * SECONDS_IN_DAY;
  if (totalLength > secondsInView) {
    span = secondsInView - offsetSeconds;
  }
  span -= getExcludedSeconds(dateAdapter, {
    startDate: begin,
    seconds: span,
    excluded,
    precision
  });
  return span / SECONDS_IN_DAY;
}
function getWeekViewEventOffset(dateAdapter, { event, startOfWeek: startOfWeekDate, excluded, precision }) {
  const { differenceInDays: differenceInDays2, startOfDay: startOfDay2, differenceInSeconds: differenceInSeconds2 } = dateAdapter;
  if (event.start < startOfWeekDate) {
    return 0;
  }
  let offset = 0;
  switch (precision) {
    case "days":
      offset = differenceInDays2(startOfDay2(event.start), startOfWeekDate) * SECONDS_IN_DAY;
      break;
    case "minutes":
      offset = differenceInSeconds2(event.start, startOfWeekDate);
      break;
  }
  offset -= getExcludedSeconds(dateAdapter, {
    startDate: startOfWeekDate,
    seconds: offset,
    excluded,
    precision
  });
  return Math.abs(offset / SECONDS_IN_DAY);
}
function isEventIsPeriod(dateAdapter, { event, periodStart, periodEnd }) {
  const { isSameSecond: isSameSecond2 } = dateAdapter;
  const eventStart = event.start;
  const eventEnd = event.end || event.start;
  if (eventStart > periodStart && eventStart < periodEnd) {
    return true;
  }
  if (eventEnd > periodStart && eventEnd < periodEnd) {
    return true;
  }
  if (eventStart < periodStart && eventEnd > periodEnd) {
    return true;
  }
  if (isSameSecond2(eventStart, periodStart) || isSameSecond2(eventStart, periodEnd)) {
    return true;
  }
  if (isSameSecond2(eventEnd, periodStart) || isSameSecond2(eventEnd, periodEnd)) {
    return true;
  }
  return false;
}
function getEventsInPeriod(dateAdapter, { events, periodStart, periodEnd }) {
  return events.filter((event) => isEventIsPeriod(dateAdapter, { event, periodStart, periodEnd }));
}
function getWeekDay(dateAdapter, { date, weekendDays = DEFAULT_WEEKEND_DAYS }) {
  const { startOfDay: startOfDay2, isSameDay: isSameDay2, getDay: getDay2 } = dateAdapter;
  const today = startOfDay2(/* @__PURE__ */ new Date());
  const day = getDay2(date);
  return {
    date,
    day,
    isPast: date < today,
    isToday: isSameDay2(date, today),
    isFuture: date > today,
    isWeekend: weekendDays.indexOf(day) > -1
  };
}
function getWeekViewHeader(dateAdapter, { viewDate, weekStartsOn, excluded = [], weekendDays, viewStart = dateAdapter.startOfWeek(viewDate, { weekStartsOn }), viewEnd = dateAdapter.addDays(viewStart, DAYS_IN_WEEK) }) {
  const { addDays: addDays2, getDay: getDay2 } = dateAdapter;
  const days = [];
  let date = viewStart;
  while (date < viewEnd) {
    if (!excluded.some((e) => getDay2(date) === e)) {
      days.push(getWeekDay(dateAdapter, { date, weekendDays }));
    }
    date = addDays2(date, 1);
  }
  return days;
}
function getDifferenceInDaysWithExclusions(dateAdapter, { date1, date2, excluded }) {
  let date = date1;
  let diff = 0;
  while (date < date2) {
    if (excluded.indexOf(dateAdapter.getDay(date)) === -1) {
      diff++;
    }
    date = dateAdapter.addDays(date, 1);
  }
  return diff;
}
function getAllDayWeekEvents(dateAdapter, { events = [], excluded = [], precision = "days", absolutePositionedEvents = false, viewStart, viewEnd }) {
  viewStart = dateAdapter.startOfDay(viewStart);
  viewEnd = dateAdapter.endOfDay(viewEnd);
  const { differenceInSeconds: differenceInSeconds2, differenceInDays: differenceInDays2 } = dateAdapter;
  const maxRange = getDifferenceInDaysWithExclusions(dateAdapter, {
    date1: viewStart,
    date2: viewEnd,
    excluded
  });
  const totalDaysInView = differenceInDays2(viewEnd, viewStart) + 1;
  const eventsMapped = events.filter((event) => event.allDay).map((event) => {
    const offset = getWeekViewEventOffset(dateAdapter, {
      event,
      startOfWeek: viewStart,
      excluded,
      precision
    });
    const span = getWeekViewEventSpan(dateAdapter, {
      event,
      offset,
      startOfWeekDate: viewStart,
      excluded,
      precision,
      totalDaysInView
    });
    return { event, offset, span };
  }).filter((e) => e.offset < maxRange).filter((e) => e.span > 0).map((entry) => ({
    event: entry.event,
    offset: entry.offset,
    span: entry.span,
    startsBeforeWeek: entry.event.start < viewStart,
    endsAfterWeek: (entry.event.end || entry.event.start) > viewEnd
  })).sort((itemA, itemB) => {
    const startSecondsDiff = differenceInSeconds2(itemA.event.start, itemB.event.start);
    if (startSecondsDiff === 0) {
      return differenceInSeconds2(itemB.event.end || itemB.event.start, itemA.event.end || itemA.event.start);
    }
    return startSecondsDiff;
  });
  const allDayEventRows = [];
  const allocatedEvents = [];
  eventsMapped.forEach((event, index) => {
    if (allocatedEvents.indexOf(event) === -1) {
      allocatedEvents.push(event);
      let rowSpan = event.span + event.offset;
      const otherRowEvents = eventsMapped.slice(index + 1).filter((nextEvent) => {
        if (nextEvent.offset >= rowSpan && rowSpan + nextEvent.span <= totalDaysInView && allocatedEvents.indexOf(nextEvent) === -1) {
          const nextEventOffset = nextEvent.offset - rowSpan;
          if (!absolutePositionedEvents) {
            nextEvent.offset = nextEventOffset;
          }
          rowSpan += nextEvent.span + nextEventOffset;
          allocatedEvents.push(nextEvent);
          return true;
        }
      });
      const weekEvents = [event, ...otherRowEvents];
      const id = weekEvents.filter((weekEvent) => weekEvent.event.id).map((weekEvent) => weekEvent.event.id).join("-");
      allDayEventRows.push(Object.assign({ row: weekEvents }, id ? { id } : {}));
    }
  });
  return allDayEventRows;
}
function getWeekViewHourGrid(dateAdapter, { events, viewDate, hourSegments, hourDuration, dayStart, dayEnd, weekStartsOn, excluded, weekendDays, segmentHeight, viewStart, viewEnd, minimumEventHeight }) {
  const dayViewHourGrid = getDayViewHourGrid(dateAdapter, {
    viewDate,
    hourSegments,
    hourDuration,
    dayStart,
    dayEnd
  });
  const weekDays = getWeekViewHeader(dateAdapter, {
    viewDate,
    weekStartsOn,
    excluded,
    weekendDays,
    viewStart,
    viewEnd
  });
  const { setHours: setHours2, setMinutes: setMinutes2, getHours: getHours2, getMinutes: getMinutes2 } = dateAdapter;
  return weekDays.map((day) => {
    const dayView = getDayView(dateAdapter, {
      events,
      viewDate: day.date,
      hourSegments,
      dayStart,
      dayEnd,
      segmentHeight,
      eventWidth: 1,
      hourDuration,
      minimumEventHeight
    });
    const hours = dayViewHourGrid.map((hour) => {
      const segments = hour.segments.map((segment) => {
        const date = setMinutes2(setHours2(day.date, getHours2(segment.date)), getMinutes2(segment.date));
        return Object.assign(Object.assign({}, segment), { date });
      });
      return Object.assign(Object.assign({}, hour), { segments });
    });
    function getColumnCount(allEvents, prevOverlappingEvents) {
      const columnCount = Math.max(...prevOverlappingEvents.map((iEvent) => iEvent.left + 1));
      const nextOverlappingEvents = allEvents.filter((iEvent) => iEvent.left >= columnCount).filter((iEvent) => {
        return getOverLappingWeekViewEvents(prevOverlappingEvents, iEvent.top, iEvent.top + iEvent.height).length > 0;
      });
      if (nextOverlappingEvents.length > 0) {
        return getColumnCount(allEvents, nextOverlappingEvents);
      } else {
        return columnCount;
      }
    }
    const mappedEvents = dayView.events.map((event) => {
      const columnCount = getColumnCount(dayView.events, getOverLappingWeekViewEvents(dayView.events, event.top, event.top + event.height));
      const width = 100 / columnCount;
      return Object.assign(Object.assign({}, event), { left: event.left * width, width });
    });
    return {
      hours,
      date: day.date,
      events: mappedEvents.map((event) => {
        const overLappingEvents = getOverLappingWeekViewEvents(mappedEvents.filter((otherEvent) => otherEvent.left > event.left), event.top, event.top + event.height);
        if (overLappingEvents.length > 0) {
          return Object.assign(Object.assign({}, event), { width: Math.min(...overLappingEvents.map((otherEvent) => otherEvent.left)) - event.left });
        }
        return event;
      })
    };
  });
}
function getWeekView(dateAdapter, { events = [], viewDate, weekStartsOn, excluded = [], precision = "days", absolutePositionedEvents = false, hourSegments, hourDuration, dayStart, dayEnd, weekendDays, segmentHeight, minimumEventHeight, viewStart = dateAdapter.startOfWeek(viewDate, { weekStartsOn }), viewEnd = dateAdapter.endOfWeek(viewDate, { weekStartsOn }) }) {
  if (!events) {
    events = [];
  }
  const { startOfDay: startOfDay2, endOfDay: endOfDay2 } = dateAdapter;
  viewStart = startOfDay2(viewStart);
  viewEnd = endOfDay2(viewEnd);
  const eventsInPeriod = getEventsInPeriod(dateAdapter, {
    events,
    periodStart: viewStart,
    periodEnd: viewEnd
  });
  const header = getWeekViewHeader(dateAdapter, {
    viewDate,
    weekStartsOn,
    excluded,
    weekendDays,
    viewStart,
    viewEnd
  });
  return {
    allDayEventRows: getAllDayWeekEvents(dateAdapter, {
      events: eventsInPeriod,
      excluded,
      precision,
      absolutePositionedEvents,
      viewStart,
      viewEnd
    }),
    period: {
      events: eventsInPeriod,
      start: header[0].date,
      end: endOfDay2(header[header.length - 1].date)
    },
    hourColumns: getWeekViewHourGrid(dateAdapter, {
      events,
      viewDate,
      hourSegments,
      hourDuration,
      dayStart,
      dayEnd,
      weekStartsOn,
      excluded,
      weekendDays,
      segmentHeight,
      viewStart,
      viewEnd,
      minimumEventHeight
    })
  };
}
function getMonthView(dateAdapter, { events = [], viewDate, weekStartsOn, excluded = [], viewStart = dateAdapter.startOfMonth(viewDate), viewEnd = dateAdapter.endOfMonth(viewDate), weekendDays }) {
  if (!events) {
    events = [];
  }
  const { startOfWeek: startOfWeek2, endOfWeek: endOfWeek2, differenceInDays: differenceInDays2, startOfDay: startOfDay2, addHours: addHours2, endOfDay: endOfDay2, isSameMonth: isSameMonth2, getDay: getDay2 } = dateAdapter;
  const start = startOfWeek2(viewStart, { weekStartsOn });
  const end = endOfWeek2(viewEnd, { weekStartsOn });
  const eventsInMonth = getEventsInPeriod(dateAdapter, {
    events,
    periodStart: start,
    periodEnd: end
  });
  const initialViewDays = [];
  let previousDate;
  for (let i = 0; i < differenceInDays2(end, start) + 1; i++) {
    let date;
    if (previousDate) {
      date = startOfDay2(addHours2(previousDate, HOURS_IN_DAY));
      if (previousDate.getTime() === date.getTime()) {
        date = startOfDay2(addHours2(previousDate, HOURS_IN_DAY + 1));
      }
      previousDate = date;
    } else {
      date = previousDate = start;
    }
    if (!excluded.some((e) => getDay2(date) === e)) {
      const day = getWeekDay(dateAdapter, {
        date,
        weekendDays
      });
      const eventsInPeriod = getEventsInPeriod(dateAdapter, {
        events: eventsInMonth,
        periodStart: startOfDay2(date),
        periodEnd: endOfDay2(date)
      });
      day.inMonth = isSameMonth2(date, viewDate);
      day.events = eventsInPeriod;
      day.badgeTotal = eventsInPeriod.length;
      initialViewDays.push(day);
    }
  }
  let days = [];
  const totalDaysVisibleInWeek = DAYS_IN_WEEK - excluded.length;
  if (totalDaysVisibleInWeek < DAYS_IN_WEEK) {
    for (let i = 0; i < initialViewDays.length; i += totalDaysVisibleInWeek) {
      const row = initialViewDays.slice(i, i + totalDaysVisibleInWeek);
      const isRowInMonth = row.some((day) => viewStart <= day.date && day.date < viewEnd);
      if (isRowInMonth) {
        days = [...days, ...row];
      }
    }
  } else {
    days = initialViewDays;
  }
  const rows = Math.floor(days.length / totalDaysVisibleInWeek);
  const rowOffsets = [];
  for (let i = 0; i < rows; i++) {
    rowOffsets.push(i * totalDaysVisibleInWeek);
  }
  return {
    rowOffsets,
    totalDaysVisibleInWeek,
    days,
    period: {
      start: days[0].date,
      end: endOfDay2(days[days.length - 1].date),
      events: eventsInMonth
    }
  };
}
function getOverLappingWeekViewEvents(events, top, bottom) {
  return events.filter((previousEvent) => {
    const previousEventTop = previousEvent.top;
    const previousEventBottom = previousEvent.top + previousEvent.height;
    if (top < previousEventBottom && previousEventBottom < bottom) {
      return true;
    } else if (top < previousEventTop && previousEventTop < bottom) {
      return true;
    } else if (previousEventTop <= top && bottom <= previousEventBottom) {
      return true;
    }
    return false;
  });
}
function getDayView(dateAdapter, { events, viewDate, hourSegments, dayStart, dayEnd, eventWidth, segmentHeight, hourDuration, minimumEventHeight }) {
  const { setMinutes: setMinutes2, setHours: setHours2, startOfDay: startOfDay2, startOfMinute: startOfMinute2, endOfDay: endOfDay2, differenceInMinutes: differenceInMinutes2 } = dateAdapter;
  const startOfView = setMinutes2(setHours2(startOfDay2(viewDate), sanitiseHours(dayStart.hour)), sanitiseMinutes(dayStart.minute));
  const endOfView = setMinutes2(setHours2(startOfMinute2(endOfDay2(viewDate)), sanitiseHours(dayEnd.hour)), sanitiseMinutes(dayEnd.minute));
  endOfView.setSeconds(59, 999);
  const previousDayEvents = [];
  const eventsInPeriod = getEventsInPeriod(dateAdapter, {
    events: events.filter((event) => !event.allDay),
    periodStart: startOfView,
    periodEnd: endOfView
  });
  const dayViewEvents = eventsInPeriod.sort((eventA, eventB) => {
    return eventA.start.valueOf() - eventB.start.valueOf();
  }).map((event) => {
    const eventStart = event.start;
    const eventEnd = event.end || eventStart;
    const startsBeforeDay = eventStart < startOfView;
    const endsAfterDay = eventEnd > endOfView;
    const hourHeightModifier = hourSegments * segmentHeight / (hourDuration || MINUTES_IN_HOUR);
    let top = 0;
    if (eventStart > startOfView) {
      const eventOffset = dateAdapter.getTimezoneOffset(eventStart);
      const startOffset = dateAdapter.getTimezoneOffset(startOfView);
      const diff = startOffset - eventOffset;
      top += differenceInMinutes2(eventStart, startOfView) + diff;
    }
    top *= hourHeightModifier;
    top = Math.floor(top);
    const startDate = startsBeforeDay ? startOfView : eventStart;
    const endDate = endsAfterDay ? endOfView : eventEnd;
    const timezoneOffset = dateAdapter.getTimezoneOffset(startDate) - dateAdapter.getTimezoneOffset(endDate);
    let height = differenceInMinutes2(endDate, startDate) + timezoneOffset;
    if (!event.end) {
      height = segmentHeight;
    } else {
      height *= hourHeightModifier;
    }
    if (minimumEventHeight && height < minimumEventHeight) {
      height = minimumEventHeight;
    }
    height = Math.floor(height);
    const bottom = top + height;
    const overlappingPreviousEvents = getOverLappingWeekViewEvents(previousDayEvents, top, bottom);
    let left = 0;
    while (overlappingPreviousEvents.some((previousEvent) => previousEvent.left === left)) {
      left += eventWidth;
    }
    const dayEvent = {
      event,
      height,
      width: eventWidth,
      top,
      left,
      startsBeforeDay,
      endsAfterDay
    };
    previousDayEvents.push(dayEvent);
    return dayEvent;
  });
  const width = Math.max(...dayViewEvents.map((event) => event.left + event.width));
  const allDayEvents = getEventsInPeriod(dateAdapter, {
    events: events.filter((event) => event.allDay),
    periodStart: startOfDay2(startOfView),
    periodEnd: endOfDay2(endOfView)
  });
  return {
    events: dayViewEvents,
    width,
    allDayEvents,
    period: {
      events: eventsInPeriod,
      start: startOfView,
      end: endOfView
    }
  };
}
function sanitiseHours(hours) {
  return Math.max(Math.min(23, hours), 0);
}
function sanitiseMinutes(minutes) {
  return Math.max(Math.min(59, minutes), 0);
}
function getDayViewHourGrid(dateAdapter, { viewDate, hourSegments, hourDuration, dayStart, dayEnd }) {
  const { setMinutes: setMinutes2, setHours: setHours2, startOfDay: startOfDay2, startOfMinute: startOfMinute2, endOfDay: endOfDay2, addMinutes: addMinutes2, addDays: addDays2 } = dateAdapter;
  const hours = [];
  let startOfView = setMinutes2(setHours2(startOfDay2(viewDate), sanitiseHours(dayStart.hour)), sanitiseMinutes(dayStart.minute));
  let endOfView = setMinutes2(setHours2(startOfMinute2(endOfDay2(viewDate)), sanitiseHours(dayEnd.hour)), sanitiseMinutes(dayEnd.minute));
  const segmentDuration = (hourDuration || MINUTES_IN_HOUR) / hourSegments;
  let startOfViewDay = startOfDay2(viewDate);
  const endOfViewDay = endOfDay2(viewDate);
  let dateAdjustment = (d) => d;
  if (dateAdapter.getTimezoneOffset(startOfViewDay) !== dateAdapter.getTimezoneOffset(endOfViewDay)) {
    startOfViewDay = addDays2(startOfViewDay, 1);
    startOfView = addDays2(startOfView, 1);
    endOfView = addDays2(endOfView, 1);
    dateAdjustment = (d) => addDays2(d, -1);
  }
  const dayDuration = hourDuration ? HOURS_IN_DAY * 60 / hourDuration : MINUTES_IN_HOUR;
  for (let i = 0; i < dayDuration; i++) {
    const segments = [];
    for (let j = 0; j < hourSegments; j++) {
      const date = addMinutes2(addMinutes2(startOfView, i * (hourDuration || MINUTES_IN_HOUR)), j * segmentDuration);
      if (date >= startOfView && date < endOfView) {
        segments.push({
          date: dateAdjustment(date),
          displayDate: date,
          isStart: j === 0
        });
      }
    }
    if (segments.length > 0) {
      hours.push({ segments });
    }
  }
  return hours;
}
function validateEvents(events, log) {
  let isValid = true;
  function isError(msg, event) {
    log(msg, event);
    isValid = false;
  }
  if (!Array.isArray(events)) {
    log(EventValidationErrorMessage.NotArray, events);
    return false;
  }
  events.forEach((event) => {
    if (!event.start) {
      isError(EventValidationErrorMessage.StartPropertyMissing, event);
    } else if (!(event.start instanceof Date)) {
      isError(EventValidationErrorMessage.StartPropertyNotDate, event);
    }
    if (event.end) {
      if (!(event.end instanceof Date)) {
        isError(EventValidationErrorMessage.EndPropertyNotDate, event);
      }
      if (event.start > event.end) {
        isError(EventValidationErrorMessage.EndsBeforeStart, event);
      }
    }
  });
  return isValid;
}
var DAYS_OF_WEEK, DEFAULT_WEEKEND_DAYS, DAYS_IN_WEEK, HOURS_IN_DAY, MINUTES_IN_HOUR, SECONDS_IN_DAY, EventValidationErrorMessage;
var init_calendar_utils = __esm({
  "node_modules/calendar-utils/calendar-utils.js"() {
    "use strict";
    (function(DAYS_OF_WEEK2) {
      DAYS_OF_WEEK2[DAYS_OF_WEEK2["SUNDAY"] = 0] = "SUNDAY";
      DAYS_OF_WEEK2[DAYS_OF_WEEK2["MONDAY"] = 1] = "MONDAY";
      DAYS_OF_WEEK2[DAYS_OF_WEEK2["TUESDAY"] = 2] = "TUESDAY";
      DAYS_OF_WEEK2[DAYS_OF_WEEK2["WEDNESDAY"] = 3] = "WEDNESDAY";
      DAYS_OF_WEEK2[DAYS_OF_WEEK2["THURSDAY"] = 4] = "THURSDAY";
      DAYS_OF_WEEK2[DAYS_OF_WEEK2["FRIDAY"] = 5] = "FRIDAY";
      DAYS_OF_WEEK2[DAYS_OF_WEEK2["SATURDAY"] = 6] = "SATURDAY";
    })(DAYS_OF_WEEK || (DAYS_OF_WEEK = {}));
    DEFAULT_WEEKEND_DAYS = [
      DAYS_OF_WEEK.SUNDAY,
      DAYS_OF_WEEK.SATURDAY
    ];
    DAYS_IN_WEEK = 7;
    HOURS_IN_DAY = 24;
    MINUTES_IN_HOUR = 60;
    SECONDS_IN_DAY = 60 * 60 * 24;
    (function(EventValidationErrorMessage2) {
      EventValidationErrorMessage2["NotArray"] = "Events must be an array";
      EventValidationErrorMessage2["StartPropertyMissing"] = "Event is missing the `start` property";
      EventValidationErrorMessage2["StartPropertyNotDate"] = "Event `start` property should be a javascript date object. Do `new Date(event.start)` to fix it.";
      EventValidationErrorMessage2["EndPropertyNotDate"] = "Event `end` property should be a javascript date object. Do `new Date(event.end)` to fix it.";
      EventValidationErrorMessage2["EndsBeforeStart"] = "Event `start` property occurs after the `end`";
    })(EventValidationErrorMessage || (EventValidationErrorMessage = {}));
  }
});

// node_modules/@mattlewis92/dom-autoscroller/dist/bundle.es.js
function getDef(f, d) {
  if (typeof f === "undefined") {
    return typeof d === "undefined" ? f : d;
  }
  return f;
}
function boolean(func, def) {
  func = getDef(func, def);
  if (typeof func === "function") {
    return function f() {
      var arguments$1 = arguments;
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments$1[_key];
      }
      return !!func.apply(this, args);
    };
  }
  return !!func ? function() {
    return true;
  } : function() {
    return false;
  };
}
function indexOfElement(elements, element) {
  element = resolveElement(element, true);
  if (!isElement$1(element)) {
    return -1;
  }
  for (var i = 0; i < elements.length; i++) {
    if (elements[i] === element) {
      return i;
    }
  }
  return -1;
}
function hasElement(elements, element) {
  return -1 !== indexOfElement(elements, element);
}
function pushElements(elements, toAdd) {
  for (var i = 0; i < toAdd.length; i++) {
    if (!hasElement(elements, toAdd[i])) {
      elements.push(toAdd[i]);
    }
  }
  return toAdd;
}
function addElements(elements) {
  var arguments$1 = arguments;
  var toAdd = [], len = arguments.length - 1;
  while (len-- > 0) {
    toAdd[len] = arguments$1[len + 1];
  }
  toAdd = toAdd.map(resolveElement);
  return pushElements(elements, toAdd);
}
function removeElements(elements) {
  var arguments$1 = arguments;
  var toRemove = [], len = arguments.length - 1;
  while (len-- > 0) {
    toRemove[len] = arguments$1[len + 1];
  }
  return toRemove.map(resolveElement).reduce(function(last, e) {
    var index = indexOfElement(elements, e);
    if (index !== -1) {
      return last.concat(elements.splice(index, 1));
    }
    return last;
  }, []);
}
function resolveElement(element, noThrow) {
  if (typeof element === "string") {
    try {
      return document.querySelector(element);
    } catch (e) {
      throw e;
    }
  }
  if (!isElement$1(element) && !noThrow) {
    throw new TypeError(element + " is not a DOM element.");
  }
  return element;
}
function createPointCB(object, options) {
  options = options || {};
  var allowUpdate = boolean(options.allowUpdate, true);
  return function pointCB(event) {
    event = event || window.event;
    object.target = event.target || event.srcElement || event.originalTarget;
    object.element = this;
    object.type = event.type;
    if (!allowUpdate(event)) {
      return;
    }
    if (event.targetTouches) {
      object.x = event.targetTouches[0].clientX;
      object.y = event.targetTouches[0].clientY;
      object.pageX = event.targetTouches[0].pageX;
      object.pageY = event.targetTouches[0].pageY;
      object.screenX = event.targetTouches[0].screenX;
      object.screenY = event.targetTouches[0].screenY;
    } else {
      if (event.pageX === null && event.clientX !== null) {
        var eventDoc = event.target && event.target.ownerDocument || document;
        var doc = eventDoc.documentElement;
        var body = eventDoc.body;
        object.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
        object.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
      } else {
        object.pageX = event.pageX;
        object.pageY = event.pageY;
      }
      object.x = event.clientX;
      object.y = event.clientY;
      object.screenX = event.screenX;
      object.screenY = event.screenY;
    }
    object.clientX = object.x;
    object.clientY = object.y;
  };
}
function createWindowRect() {
  var props = {
    top: { value: 0, enumerable: true },
    left: { value: 0, enumerable: true },
    right: { value: window.innerWidth, enumerable: true },
    bottom: { value: window.innerHeight, enumerable: true },
    width: { value: window.innerWidth, enumerable: true },
    height: { value: window.innerHeight, enumerable: true },
    x: { value: 0, enumerable: true },
    y: { value: 0, enumerable: true }
  };
  if (Object.create) {
    return Object.create({}, props);
  } else {
    var rect = {};
    Object.defineProperties(rect, props);
    return rect;
  }
}
function getClientRect(el) {
  if (el === window) {
    return createWindowRect();
  } else {
    try {
      var rect = el.getBoundingClientRect();
      if (rect.x === void 0) {
        rect.x = rect.left;
        rect.y = rect.top;
      }
      return rect;
    } catch (e) {
      throw new TypeError("Can't call getBoundingClientRect on " + el);
    }
  }
}
function pointInside(point, el) {
  var rect = getClientRect(el);
  return point.y > rect.top && point.y < rect.bottom && point.x > rect.left && point.x < rect.right;
}
function createDispatcher(element) {
  var defaultSettings = {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    ctrlKey: false,
    shiftKey: false,
    altKey: false,
    metaKey: false,
    button: 0,
    buttons: 1,
    relatedTarget: null,
    region: null
  };
  if (element !== void 0) {
    element.addEventListener("mousemove", onMove);
  }
  function onMove(e) {
    for (var i = 0; i < mouseEventProps.length; i++) {
      defaultSettings[mouseEventProps[i]] = e[mouseEventProps[i]];
    }
  }
  var dispatch = (function() {
    if (MouseEvent) {
      return function m1(element2, initMove, data) {
        var evt = new MouseEvent("mousemove", createMoveInit(defaultSettings, initMove));
        setSpecial(evt, data);
        return element2.dispatchEvent(evt);
      };
    } else if (typeof document.createEvent === "function") {
      return function m2(element2, initMove, data) {
        var settings = createMoveInit(defaultSettings, initMove);
        var evt = document.createEvent("MouseEvents");
        evt.initMouseEvent(
          "mousemove",
          true,
          //can bubble
          true,
          //cancelable
          window,
          //view
          0,
          //detail
          settings.screenX,
          //0, //screenX
          settings.screenY,
          //0, //screenY
          settings.clientX,
          //80, //clientX
          settings.clientY,
          //20, //clientY
          settings.ctrlKey,
          //false, //ctrlKey
          settings.altKey,
          //false, //altKey
          settings.shiftKey,
          //false, //shiftKey
          settings.metaKey,
          //false, //metaKey
          settings.button,
          //0, //button
          settings.relatedTarget
          //null //relatedTarget
        );
        setSpecial(evt, data);
        return element2.dispatchEvent(evt);
      };
    } else if (typeof document.createEventObject === "function") {
      return function m3(element2, initMove, data) {
        var evt = document.createEventObject();
        var settings = createMoveInit(defaultSettings, initMove);
        for (var name in settings) {
          evt[name] = settings[name];
        }
        setSpecial(evt, data);
        return element2.dispatchEvent(evt);
      };
    }
  })();
  function destroy() {
    if (element) {
      element.removeEventListener("mousemove", onMove, false);
    }
    defaultSettings = null;
  }
  return {
    destroy,
    dispatch
  };
}
function createMoveInit(defaultSettings, initMove) {
  initMove = initMove || {};
  var settings = objectCreate$1(defaultSettings);
  for (var i = 0; i < mouseEventProps.length; i++) {
    if (initMove[mouseEventProps[i]] !== void 0) {
      settings[mouseEventProps[i]] = initMove[mouseEventProps[i]];
    }
  }
  return settings;
}
function setSpecial(e, data) {
  console.log("data ", data);
  e.data = data || {};
  e.dispatched = "mousemove";
}
function AutoScroller(elements, options) {
  if (options === void 0) options = {};
  var self = this;
  var maxSpeed = 4, scrolling = false;
  if (typeof options.margin !== "object") {
    var margin = options.margin || -1;
    this.margin = {
      left: margin,
      right: margin,
      top: margin,
      bottom: margin
    };
  } else {
    this.margin = options.margin;
  }
  this.scrollWhenOutside = options.scrollWhenOutside || false;
  var point = {}, pointCB = createPointCB(point), dispatcher = createDispatcher(), down = false;
  window.addEventListener("mousemove", pointCB, false);
  window.addEventListener("touchmove", pointCB, false);
  if (!isNaN(options.maxSpeed)) {
    maxSpeed = options.maxSpeed;
  }
  if (typeof maxSpeed !== "object") {
    maxSpeed = {
      left: maxSpeed,
      right: maxSpeed,
      top: maxSpeed,
      bottom: maxSpeed
    };
  }
  this.autoScroll = boolean(options.autoScroll);
  this.syncMove = boolean(options.syncMove, false);
  this.destroy = function(forceCleanAnimation) {
    window.removeEventListener("mousemove", pointCB, false);
    window.removeEventListener("touchmove", pointCB, false);
    window.removeEventListener("mousedown", onDown, false);
    window.removeEventListener("touchstart", onDown, false);
    window.removeEventListener("mouseup", onUp, false);
    window.removeEventListener("touchend", onUp, false);
    window.removeEventListener("pointerup", onUp, false);
    window.removeEventListener("mouseleave", onMouseOut, false);
    window.removeEventListener("mousemove", onMove, false);
    window.removeEventListener("touchmove", onMove, false);
    window.removeEventListener("scroll", setScroll, true);
    elements = [];
    if (forceCleanAnimation) {
      cleanAnimation();
    }
  };
  this.add = function() {
    var element = [], len = arguments.length;
    while (len--) element[len] = arguments[len];
    addElements.apply(void 0, [elements].concat(element));
    return this;
  };
  this.remove = function() {
    var element = [], len = arguments.length;
    while (len--) element[len] = arguments[len];
    return removeElements.apply(void 0, [elements].concat(element));
  };
  var hasWindow = null, windowAnimationFrame;
  if (Object.prototype.toString.call(elements) !== "[object Array]") {
    elements = [elements];
  }
  (function(temp) {
    elements = [];
    temp.forEach(function(element) {
      if (element === window) {
        hasWindow = window;
      } else {
        self.add(element);
      }
    });
  })(elements);
  Object.defineProperties(this, {
    down: {
      get: function() {
        return down;
      }
    },
    maxSpeed: {
      get: function() {
        return maxSpeed;
      }
    },
    point: {
      get: function() {
        return point;
      }
    },
    scrolling: {
      get: function() {
        return scrolling;
      }
    }
  });
  var current = null, animationFrame;
  window.addEventListener("mousedown", onDown, false);
  window.addEventListener("touchstart", onDown, false);
  window.addEventListener("mouseup", onUp, false);
  window.addEventListener("touchend", onUp, false);
  window.addEventListener("pointerup", onUp, false);
  window.addEventListener("mousemove", onMove, false);
  window.addEventListener("touchmove", onMove, false);
  window.addEventListener("mouseleave", onMouseOut, false);
  window.addEventListener("scroll", setScroll, true);
  function setScroll(e) {
    for (var i = 0; i < elements.length; i++) {
      if (elements[i] === e.target) {
        scrolling = true;
        break;
      }
    }
    if (scrolling) {
      requestFrame(function() {
        return scrolling = false;
      });
    }
  }
  function onDown() {
    down = true;
  }
  function onUp() {
    down = false;
    cleanAnimation();
  }
  function cleanAnimation() {
    cancelFrame(animationFrame);
    cancelFrame(windowAnimationFrame);
  }
  function onMouseOut() {
    down = false;
  }
  function getTarget(target) {
    if (!target) {
      return null;
    }
    if (current === target) {
      return target;
    }
    if (hasElement(elements, target)) {
      return target;
    }
    while (target = target.parentNode) {
      if (hasElement(elements, target)) {
        return target;
      }
    }
    return null;
  }
  function getElementUnderPoint() {
    var underPoint = null;
    for (var i = 0; i < elements.length; i++) {
      if (inside(point, elements[i])) {
        underPoint = elements[i];
      }
    }
    return underPoint;
  }
  function onMove(event) {
    if (!self.autoScroll()) {
      return;
    }
    if (event["dispatched"]) {
      return;
    }
    var target = event.target, body = document.body;
    if (current && !inside(point, current)) {
      if (!self.scrollWhenOutside) {
        current = null;
      }
    }
    if (target && target.parentNode === body) {
      target = getElementUnderPoint();
    } else {
      target = getTarget(target);
      if (!target) {
        target = getElementUnderPoint();
      }
    }
    if (target && target !== current) {
      current = target;
    }
    if (hasWindow) {
      cancelFrame(windowAnimationFrame);
      windowAnimationFrame = requestFrame(scrollWindow);
    }
    if (!current) {
      return;
    }
    cancelFrame(animationFrame);
    animationFrame = requestFrame(scrollTick);
  }
  function scrollWindow() {
    autoScroll(hasWindow);
    cancelFrame(windowAnimationFrame);
    windowAnimationFrame = requestFrame(scrollWindow);
  }
  function scrollTick() {
    if (!current) {
      return;
    }
    autoScroll(current);
    cancelFrame(animationFrame);
    animationFrame = requestFrame(scrollTick);
  }
  function autoScroll(el) {
    var rect = getClientRect(el), scrollx, scrolly;
    if (point.x < rect.left + self.margin.left) {
      scrollx = Math.floor(
        Math.max(-1, (point.x - rect.left) / self.margin.left - 1) * self.maxSpeed.left
      );
    } else if (point.x > rect.right - self.margin.right) {
      scrollx = Math.ceil(
        Math.min(1, (point.x - rect.right) / self.margin.right + 1) * self.maxSpeed.right
      );
    } else {
      scrollx = 0;
    }
    if (point.y < rect.top + self.margin.top) {
      scrolly = Math.floor(
        Math.max(-1, (point.y - rect.top) / self.margin.top - 1) * self.maxSpeed.top
      );
    } else if (point.y > rect.bottom - self.margin.bottom) {
      scrolly = Math.ceil(
        Math.min(1, (point.y - rect.bottom) / self.margin.bottom + 1) * self.maxSpeed.bottom
      );
    } else {
      scrolly = 0;
    }
    if (self.syncMove()) {
      dispatcher.dispatch(el, {
        pageX: point.pageX + scrollx,
        pageY: point.pageY + scrolly,
        clientX: point.x + scrollx,
        clientY: point.y + scrolly
      });
    }
    setTimeout(function() {
      if (scrolly) {
        scrollY(el, scrolly);
      }
      if (scrollx) {
        scrollX(el, scrollx);
      }
    });
  }
  function scrollY(el, amount) {
    if (el === window) {
      window.scrollTo(el.pageXOffset, el.pageYOffset + amount);
    } else {
      el.scrollTop += amount;
    }
  }
  function scrollX(el, amount) {
    if (el === window) {
      window.scrollTo(el.pageXOffset + amount, el.pageYOffset);
    } else {
      el.scrollLeft += amount;
    }
  }
}
function AutoScrollerFactory(element, options) {
  return new AutoScroller(element, options);
}
function inside(point, el, rect) {
  if (!rect) {
    return pointInside(point, el);
  } else {
    return point.y > rect.top && point.y < rect.bottom && point.x > rect.left && point.x < rect.right;
  }
}
var _typeof, isElement$1, objectCreate, objectCreate$1, mouseEventProps, prefix, requestFrame, cancelFrame, bundle_es_default;
var init_bundle_es = __esm({
  "node_modules/@mattlewis92/dom-autoscroller/dist/bundle.es.js"() {
    "use strict";
    _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    isElement$1 = function(input2) {
      return input2 != null && (typeof input2 === "undefined" ? "undefined" : _typeof(input2)) === "object" && input2.nodeType === 1 && _typeof(input2.style) === "object" && _typeof(input2.ownerDocument) === "object";
    };
    objectCreate = void 0;
    if (typeof Object.create != "function") {
      objectCreate = /* @__PURE__ */ (function(undefined$1) {
        var Temp = function Temp2() {
        };
        return function(prototype, propertiesObject) {
          if (prototype !== Object(prototype) && prototype !== null) {
            throw TypeError("Argument must be an object, or null");
          }
          Temp.prototype = prototype || {};
          var result = new Temp();
          Temp.prototype = null;
          if (propertiesObject !== undefined$1) {
            Object.defineProperties(result, propertiesObject);
          }
          if (prototype === null) {
            result.__proto__ = null;
          }
          return result;
        };
      })();
    } else {
      objectCreate = Object.create;
    }
    objectCreate$1 = objectCreate;
    mouseEventProps = ["altKey", "button", "buttons", "clientX", "clientY", "ctrlKey", "metaKey", "movementX", "movementY", "offsetX", "offsetY", "pageX", "pageY", "region", "relatedTarget", "screenX", "screenY", "shiftKey", "which", "x", "y"];
    prefix = ["webkit", "moz", "ms", "o"];
    requestFrame = (function() {
      if (typeof window === "undefined") {
        return function() {
        };
      }
      for (var i = 0, limit = prefix.length; i < limit && !window.requestAnimationFrame; ++i) {
        window.requestAnimationFrame = window[prefix[i] + "RequestAnimationFrame"];
      }
      if (!window.requestAnimationFrame) {
        var lastTime = 0;
        window.requestAnimationFrame = function(callback) {
          var now = (/* @__PURE__ */ new Date()).getTime();
          var ttc = Math.max(0, 16 - now - lastTime);
          var timer2 = window.setTimeout(function() {
            return callback(now + ttc);
          }, ttc);
          lastTime = now + ttc;
          return timer2;
        };
      }
      return window.requestAnimationFrame.bind(window);
    })();
    cancelFrame = (function() {
      if (typeof window === "undefined") {
        return function() {
        };
      }
      for (var i = 0, limit = prefix.length; i < limit && !window.cancelAnimationFrame; ++i) {
        window.cancelAnimationFrame = window[prefix[i] + "CancelAnimationFrame"] || window[prefix[i] + "CancelRequestAnimationFrame"];
      }
      if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(timer2) {
          window.clearTimeout(timer2);
        };
      }
      return window.cancelAnimationFrame.bind(window);
    })();
    bundle_es_default = AutoScrollerFactory;
  }
});

// node_modules/angular-draggable-droppable/fesm2022/angular-draggable-droppable.mjs
function addClass(renderer, element, classToAdd) {
  if (classToAdd) {
    classToAdd.split(" ").forEach((className) => renderer.addClass(element.nativeElement, className));
  }
}
function removeClass(renderer, element, classToRemove) {
  if (classToRemove) {
    classToRemove.split(" ").forEach((className) => renderer.removeClass(element.nativeElement, className));
  }
}
function isCoordinateWithinRectangle(clientX, clientY, rect) {
  return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
}
var DraggableHelper, DraggableScrollContainerDirective, DraggableDirective, DroppableDirective, DragAndDropModule;
var init_angular_draggable_droppable = __esm({
  "node_modules/angular-draggable-droppable/fesm2022/angular-draggable-droppable.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_operators();
    init_bundle_es();
    DraggableHelper = class _DraggableHelper {
      constructor() {
        this.currentDrag = new Subject();
      }
      static {
        this.\u0275fac = function DraggableHelper_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _DraggableHelper)();
        };
      }
      static {
        this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
          token: _DraggableHelper,
          factory: _DraggableHelper.\u0275fac,
          providedIn: "root"
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DraggableHelper, [{
        type: Injectable,
        args: [{
          providedIn: "root"
        }]
      }], null, null);
    })();
    DraggableScrollContainerDirective = class _DraggableScrollContainerDirective {
      constructor() {
        this.elementRef = inject(ElementRef);
      }
      static {
        this.\u0275fac = function DraggableScrollContainerDirective_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _DraggableScrollContainerDirective)();
        };
      }
      static {
        this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
          type: _DraggableScrollContainerDirective,
          selectors: [["", "mwlDraggableScrollContainer", ""]]
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DraggableScrollContainerDirective, [{
        type: Directive,
        args: [{
          selector: "[mwlDraggableScrollContainer]"
        }]
      }], null, null);
    })();
    DraggableDirective = class _DraggableDirective {
      constructor() {
        this.dragAxis = {
          x: true,
          y: true
        };
        this.dragSnapGrid = {};
        this.ghostDragEnabled = true;
        this.showOriginalElementWhileDragging = false;
        this.dragCursor = "";
        this.autoScroll = {
          margin: 20
        };
        this.dragPointerDown = new EventEmitter();
        this.dragStart = new EventEmitter();
        this.ghostElementCreated = new EventEmitter();
        this.dragging = new EventEmitter();
        this.dragEnd = new EventEmitter();
        this.pointerDown$ = new Subject();
        this.pointerMove$ = new Subject();
        this.pointerUp$ = new Subject();
        this.eventListenerSubscriptions = {};
        this.destroy$ = new Subject();
        this.timeLongPress = {
          timerBegin: 0,
          timerEnd: 0
        };
        this.element = inject(ElementRef);
        this.renderer = inject(Renderer2);
        this.draggableHelper = inject(DraggableHelper);
        this.zone = inject(NgZone);
        this.vcr = inject(ViewContainerRef);
        this.scrollContainer = inject(DraggableScrollContainerDirective, {
          optional: true
        });
        this.document = inject(DOCUMENT);
      }
      ngOnInit() {
        this.checkEventListeners();
        const pointerDragged$ = this.pointerDown$.pipe(filter(() => this.canDrag()), mergeMap((pointerDownEvent) => {
          if (pointerDownEvent.event.stopPropagation && !this.scrollContainer) {
            pointerDownEvent.event.stopPropagation();
          }
          const globalDragStyle = this.renderer.createElement("style");
          this.renderer.setAttribute(globalDragStyle, "type", "text/css");
          this.renderer.appendChild(globalDragStyle, this.renderer.createText(`
          body * {
           -moz-user-select: none;
           -ms-user-select: none;
           -webkit-user-select: none;
           user-select: none;
          }
        `));
          requestAnimationFrame(() => {
            this.document.head.appendChild(globalDragStyle);
          });
          const startScrollPosition = this.getScrollPosition();
          const scrollContainerScroll$ = new Observable((observer) => {
            const scrollContainer = this.scrollContainer ? this.scrollContainer.elementRef.nativeElement : "window";
            return this.renderer.listen(scrollContainer, "scroll", (e) => observer.next(e));
          }).pipe(startWith(startScrollPosition), map(() => this.getScrollPosition()));
          const currentDrag$ = new Subject();
          const cancelDrag$ = new ReplaySubject();
          if (this.dragPointerDown.observers.length > 0) {
            this.zone.run(() => {
              this.dragPointerDown.next({
                x: 0,
                y: 0
              });
            });
          }
          const dragComplete$ = merge(this.pointerUp$, this.pointerDown$, cancelDrag$, this.destroy$).pipe(share());
          const pointerMove = combineLatest([this.pointerMove$, scrollContainerScroll$]).pipe(map(([pointerMoveEvent, scroll]) => {
            return {
              currentDrag$,
              transformX: pointerMoveEvent.clientX - pointerDownEvent.clientX,
              transformY: pointerMoveEvent.clientY - pointerDownEvent.clientY,
              clientX: pointerMoveEvent.clientX,
              clientY: pointerMoveEvent.clientY,
              scrollLeft: scroll.left,
              scrollTop: scroll.top,
              target: pointerMoveEvent.event.target
            };
          }), map((moveData) => {
            if (this.dragSnapGrid.x) {
              moveData.transformX = Math.round(moveData.transformX / this.dragSnapGrid.x) * this.dragSnapGrid.x;
            }
            if (this.dragSnapGrid.y) {
              moveData.transformY = Math.round(moveData.transformY / this.dragSnapGrid.y) * this.dragSnapGrid.y;
            }
            return moveData;
          }), map((moveData) => {
            if (!this.dragAxis.x) {
              moveData.transformX = 0;
            }
            if (!this.dragAxis.y) {
              moveData.transformY = 0;
            }
            return moveData;
          }), map((moveData) => {
            const scrollX = moveData.scrollLeft - startScrollPosition.left;
            const scrollY = moveData.scrollTop - startScrollPosition.top;
            return __spreadProps(__spreadValues({}, moveData), {
              x: moveData.transformX + scrollX,
              y: moveData.transformY + scrollY
            });
          }), filter(({
            x,
            y,
            transformX,
            transformY
          }) => !this.validateDrag || this.validateDrag({
            x,
            y,
            transform: {
              x: transformX,
              y: transformY
            }
          })), takeUntil(dragComplete$), share());
          const dragStarted$ = pointerMove.pipe(take(1), share());
          const dragEnded$ = pointerMove.pipe(takeLast(1), share());
          dragStarted$.subscribe(({
            clientX,
            clientY,
            x,
            y
          }) => {
            if (this.dragStart.observers.length > 0) {
              this.zone.run(() => {
                this.dragStart.next({
                  cancelDrag$
                });
              });
            }
            this.scroller = bundle_es_default([this.scrollContainer ? this.scrollContainer.elementRef.nativeElement : this.document.defaultView], __spreadProps(__spreadValues({}, this.autoScroll), {
              autoScroll() {
                return true;
              }
            }));
            addClass(this.renderer, this.element, this.dragActiveClass);
            if (this.ghostDragEnabled) {
              const rect = this.element.nativeElement.getBoundingClientRect();
              const clone = this.element.nativeElement.cloneNode(true);
              if (!this.showOriginalElementWhileDragging) {
                this.renderer.setStyle(this.element.nativeElement, "visibility", "hidden");
              }
              if (this.ghostElementAppendTo) {
                this.ghostElementAppendTo.appendChild(clone);
              } else {
                this.element.nativeElement.parentNode.insertBefore(clone, this.element.nativeElement.nextSibling);
              }
              this.ghostElement = clone;
              this.document.body.style.cursor = this.dragCursor;
              this.setElementStyles(clone, {
                position: "fixed",
                top: `${rect.top}px`,
                left: `${rect.left}px`,
                width: `${rect.width}px`,
                height: `${rect.height}px`,
                cursor: this.dragCursor,
                margin: "0",
                willChange: "transform",
                pointerEvents: "none"
              });
              if (this.ghostElementTemplate) {
                const viewRef = this.vcr.createEmbeddedView(this.ghostElementTemplate);
                clone.innerHTML = "";
                viewRef.rootNodes.filter((node) => node instanceof Node).forEach((node) => {
                  clone.appendChild(node);
                });
                dragEnded$.subscribe(() => {
                  this.vcr.remove(this.vcr.indexOf(viewRef));
                });
              }
              if (this.ghostElementCreated.observers.length > 0) {
                this.zone.run(() => {
                  this.ghostElementCreated.emit({
                    clientX: clientX - x,
                    clientY: clientY - y,
                    element: clone
                  });
                });
              }
              dragEnded$.subscribe(() => {
                clone.parentElement.removeChild(clone);
                this.ghostElement = null;
                this.renderer.setStyle(this.element.nativeElement, "visibility", "");
              });
            }
            this.draggableHelper.currentDrag.next(currentDrag$);
          });
          dragEnded$.pipe(mergeMap((dragEndData) => {
            const dragEndData$ = cancelDrag$.pipe(count(), take(1), map((calledCount) => __spreadProps(__spreadValues({}, dragEndData), {
              dragCancelled: calledCount > 0
            })));
            cancelDrag$.complete();
            return dragEndData$;
          })).subscribe(({
            x,
            y,
            dragCancelled
          }) => {
            this.scroller.destroy();
            if (this.dragEnd.observers.length > 0) {
              this.zone.run(() => {
                this.dragEnd.next({
                  x,
                  y,
                  dragCancelled
                });
              });
            }
            removeClass(this.renderer, this.element, this.dragActiveClass);
            currentDrag$.complete();
          });
          merge(dragComplete$, dragEnded$).pipe(take(1)).subscribe(() => {
            requestAnimationFrame(() => {
              this.document.head.removeChild(globalDragStyle);
            });
          });
          return pointerMove;
        }), share());
        merge(pointerDragged$.pipe(take(1), map((value) => [, value])), pointerDragged$.pipe(pairwise())).pipe(filter(([previous, next]) => {
          if (!previous) {
            return true;
          }
          return previous.x !== next.x || previous.y !== next.y;
        }), map(([previous, next]) => next)).subscribe(({
          x,
          y,
          currentDrag$,
          clientX,
          clientY,
          transformX,
          transformY,
          target
        }) => {
          if (this.dragging.observers.length > 0) {
            this.zone.run(() => {
              this.dragging.next({
                x,
                y
              });
            });
          }
          requestAnimationFrame(() => {
            if (this.ghostElement) {
              const transform = `translate3d(${transformX}px, ${transformY}px, 0px)`;
              this.setElementStyles(this.ghostElement, {
                transform,
                "-webkit-transform": transform,
                "-ms-transform": transform,
                "-moz-transform": transform,
                "-o-transform": transform
              });
            }
          });
          currentDrag$.next({
            clientX,
            clientY,
            dropData: this.dropData,
            target
          });
        });
      }
      ngOnChanges(changes) {
        if (changes.dragAxis) {
          this.checkEventListeners();
        }
      }
      ngOnDestroy() {
        this.unsubscribeEventListeners();
        this.pointerDown$.complete();
        this.pointerMove$.complete();
        this.pointerUp$.complete();
        this.destroy$.next();
      }
      checkEventListeners() {
        const canDrag = this.canDrag();
        const hasEventListeners = Object.keys(this.eventListenerSubscriptions).length > 0;
        if (canDrag && !hasEventListeners) {
          this.zone.runOutsideAngular(() => {
            this.eventListenerSubscriptions.mousedown = this.renderer.listen(this.element.nativeElement, "mousedown", (event) => {
              this.onMouseDown(event);
            });
            this.eventListenerSubscriptions.mouseup = this.renderer.listen("document", "mouseup", (event) => {
              this.onMouseUp(event);
            });
            this.eventListenerSubscriptions.touchstart = this.renderer.listen(this.element.nativeElement, "touchstart", (event) => {
              this.onTouchStart(event);
            });
            this.eventListenerSubscriptions.touchend = this.renderer.listen("document", "touchend", (event) => {
              this.onTouchEnd(event);
            });
            this.eventListenerSubscriptions.touchcancel = this.renderer.listen("document", "touchcancel", (event) => {
              this.onTouchEnd(event);
            });
            this.eventListenerSubscriptions.mouseenter = this.renderer.listen(this.element.nativeElement, "mouseenter", () => {
              this.onMouseEnter();
            });
            this.eventListenerSubscriptions.mouseleave = this.renderer.listen(this.element.nativeElement, "mouseleave", () => {
              this.onMouseLeave();
            });
          });
        } else if (!canDrag && hasEventListeners) {
          this.unsubscribeEventListeners();
        }
      }
      onMouseDown(event) {
        if (event.button === 0) {
          if (!this.eventListenerSubscriptions.mousemove) {
            this.eventListenerSubscriptions.mousemove = this.renderer.listen("document", "mousemove", (mouseMoveEvent) => {
              this.pointerMove$.next({
                event: mouseMoveEvent,
                clientX: mouseMoveEvent.clientX,
                clientY: mouseMoveEvent.clientY
              });
            });
          }
          this.pointerDown$.next({
            event,
            clientX: event.clientX,
            clientY: event.clientY
          });
        }
      }
      onMouseUp(event) {
        if (event.button === 0) {
          if (this.eventListenerSubscriptions.mousemove) {
            this.eventListenerSubscriptions.mousemove();
            delete this.eventListenerSubscriptions.mousemove;
          }
          this.pointerUp$.next({
            event,
            clientX: event.clientX,
            clientY: event.clientY
          });
        }
      }
      onTouchStart(event) {
        let startScrollPosition;
        let isDragActivated;
        let hasContainerScrollbar;
        if (this.touchStartLongPress) {
          this.timeLongPress.timerBegin = Date.now();
          isDragActivated = false;
          hasContainerScrollbar = this.hasScrollbar();
          startScrollPosition = this.getScrollPosition();
        }
        if (!this.eventListenerSubscriptions.touchmove) {
          const contextMenuListener = fromEvent(this.document, "contextmenu").subscribe((e) => {
            e.preventDefault();
          });
          const touchMoveListener = fromEvent(this.document, "touchmove", {
            passive: false
          }).subscribe((touchMoveEvent) => {
            if (this.touchStartLongPress && !isDragActivated && hasContainerScrollbar) {
              isDragActivated = this.shouldBeginDrag(event, touchMoveEvent, startScrollPosition);
            }
            if (!this.touchStartLongPress || !hasContainerScrollbar || isDragActivated) {
              touchMoveEvent.preventDefault();
              this.pointerMove$.next({
                event: touchMoveEvent,
                clientX: touchMoveEvent.targetTouches[0].clientX,
                clientY: touchMoveEvent.targetTouches[0].clientY
              });
            }
          });
          this.eventListenerSubscriptions.touchmove = () => {
            contextMenuListener.unsubscribe();
            touchMoveListener.unsubscribe();
          };
        }
        this.pointerDown$.next({
          event,
          clientX: event.touches[0].clientX,
          clientY: event.touches[0].clientY
        });
      }
      onTouchEnd(event) {
        if (this.eventListenerSubscriptions.touchmove) {
          this.eventListenerSubscriptions.touchmove();
          delete this.eventListenerSubscriptions.touchmove;
          if (this.touchStartLongPress) {
            this.enableScroll();
          }
        }
        this.pointerUp$.next({
          event,
          clientX: event.changedTouches[0].clientX,
          clientY: event.changedTouches[0].clientY
        });
      }
      onMouseEnter() {
        this.setCursor(this.dragCursor);
      }
      onMouseLeave() {
        this.setCursor("");
      }
      canDrag() {
        return this.dragAxis.x || this.dragAxis.y;
      }
      setCursor(value) {
        if (!this.eventListenerSubscriptions.mousemove) {
          this.renderer.setStyle(this.element.nativeElement, "cursor", value);
        }
      }
      unsubscribeEventListeners() {
        Object.keys(this.eventListenerSubscriptions).forEach((type) => {
          this.eventListenerSubscriptions[type]();
          delete this.eventListenerSubscriptions[type];
        });
      }
      setElementStyles(element, styles) {
        Object.keys(styles).forEach((key) => {
          this.renderer.setStyle(element, key, styles[key]);
        });
      }
      getScrollElement() {
        if (this.scrollContainer) {
          return this.scrollContainer.elementRef.nativeElement;
        } else {
          return this.document.body;
        }
      }
      getScrollPosition() {
        if (this.scrollContainer) {
          return {
            top: this.scrollContainer.elementRef.nativeElement.scrollTop,
            left: this.scrollContainer.elementRef.nativeElement.scrollLeft
          };
        } else {
          return {
            top: window.pageYOffset || this.document.documentElement.scrollTop,
            left: window.pageXOffset || this.document.documentElement.scrollLeft
          };
        }
      }
      shouldBeginDrag(event, touchMoveEvent, startScrollPosition) {
        const moveScrollPosition = this.getScrollPosition();
        const deltaScroll = {
          top: Math.abs(moveScrollPosition.top - startScrollPosition.top),
          left: Math.abs(moveScrollPosition.left - startScrollPosition.left)
        };
        const deltaX = Math.abs(touchMoveEvent.targetTouches[0].clientX - event.touches[0].clientX) - deltaScroll.left;
        const deltaY = Math.abs(touchMoveEvent.targetTouches[0].clientY - event.touches[0].clientY) - deltaScroll.top;
        const deltaTotal = deltaX + deltaY;
        const longPressConfig = this.touchStartLongPress;
        if (deltaTotal > longPressConfig.delta || deltaScroll.top > 0 || deltaScroll.left > 0) {
          this.timeLongPress.timerBegin = Date.now();
        }
        this.timeLongPress.timerEnd = Date.now();
        const duration = this.timeLongPress.timerEnd - this.timeLongPress.timerBegin;
        if (duration >= longPressConfig.delay) {
          this.disableScroll();
          return true;
        }
        return false;
      }
      enableScroll() {
        if (this.scrollContainer) {
          this.renderer.setStyle(this.scrollContainer.elementRef.nativeElement, "overflow", "");
        }
        this.renderer.setStyle(this.document.body, "overflow", "");
      }
      disableScroll() {
        if (this.scrollContainer) {
          this.renderer.setStyle(this.scrollContainer.elementRef.nativeElement, "overflow", "hidden");
        }
        this.renderer.setStyle(this.document.body, "overflow", "hidden");
      }
      hasScrollbar() {
        const scrollContainer = this.getScrollElement();
        const containerHasHorizontalScroll = scrollContainer.scrollWidth > scrollContainer.clientWidth;
        const containerHasVerticalScroll = scrollContainer.scrollHeight > scrollContainer.clientHeight;
        return containerHasHorizontalScroll || containerHasVerticalScroll;
      }
      static {
        this.\u0275fac = function DraggableDirective_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _DraggableDirective)();
        };
      }
      static {
        this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
          type: _DraggableDirective,
          selectors: [["", "mwlDraggable", ""]],
          inputs: {
            dropData: "dropData",
            dragAxis: "dragAxis",
            dragSnapGrid: "dragSnapGrid",
            ghostDragEnabled: "ghostDragEnabled",
            showOriginalElementWhileDragging: "showOriginalElementWhileDragging",
            validateDrag: "validateDrag",
            dragCursor: "dragCursor",
            dragActiveClass: "dragActiveClass",
            ghostElementAppendTo: "ghostElementAppendTo",
            ghostElementTemplate: "ghostElementTemplate",
            touchStartLongPress: "touchStartLongPress",
            autoScroll: "autoScroll"
          },
          outputs: {
            dragPointerDown: "dragPointerDown",
            dragStart: "dragStart",
            ghostElementCreated: "ghostElementCreated",
            dragging: "dragging",
            dragEnd: "dragEnd"
          },
          features: [\u0275\u0275NgOnChangesFeature]
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DraggableDirective, [{
        type: Directive,
        args: [{
          selector: "[mwlDraggable]"
        }]
      }], null, {
        dropData: [{
          type: Input
        }],
        dragAxis: [{
          type: Input
        }],
        dragSnapGrid: [{
          type: Input
        }],
        ghostDragEnabled: [{
          type: Input
        }],
        showOriginalElementWhileDragging: [{
          type: Input
        }],
        validateDrag: [{
          type: Input
        }],
        dragCursor: [{
          type: Input
        }],
        dragActiveClass: [{
          type: Input
        }],
        ghostElementAppendTo: [{
          type: Input
        }],
        ghostElementTemplate: [{
          type: Input
        }],
        touchStartLongPress: [{
          type: Input
        }],
        autoScroll: [{
          type: Input
        }],
        dragPointerDown: [{
          type: Output
        }],
        dragStart: [{
          type: Output
        }],
        ghostElementCreated: [{
          type: Output
        }],
        dragging: [{
          type: Output
        }],
        dragEnd: [{
          type: Output
        }]
      });
    })();
    DroppableDirective = class _DroppableDirective {
      constructor() {
        this.dragEnter = new EventEmitter();
        this.dragLeave = new EventEmitter();
        this.dragOver = new EventEmitter();
        this.drop = new EventEmitter();
        this.element = inject(ElementRef);
        this.draggableHelper = inject(DraggableHelper);
        this.zone = inject(NgZone);
        this.renderer = inject(Renderer2);
        this.scrollContainer = inject(DraggableScrollContainerDirective, {
          optional: true
        });
      }
      ngOnInit() {
        this.currentDragSubscription = this.draggableHelper.currentDrag.subscribe((drag$) => {
          addClass(this.renderer, this.element, this.dragActiveClass);
          const droppableElement = {
            updateCache: true
          };
          const deregisterScrollListener = this.renderer.listen(this.scrollContainer ? this.scrollContainer.elementRef.nativeElement : "window", "scroll", () => {
            droppableElement.updateCache = true;
          });
          let currentDragEvent;
          const overlaps$ = drag$.pipe(map(({
            clientX,
            clientY,
            dropData,
            target
          }) => {
            currentDragEvent = {
              clientX,
              clientY,
              dropData,
              target
            };
            if (droppableElement.updateCache) {
              droppableElement.rect = this.element.nativeElement.getBoundingClientRect();
              if (this.scrollContainer) {
                droppableElement.scrollContainerRect = this.scrollContainer.elementRef.nativeElement.getBoundingClientRect();
              }
              droppableElement.updateCache = false;
            }
            const isWithinElement = isCoordinateWithinRectangle(clientX, clientY, droppableElement.rect);
            const isDropAllowed = !this.validateDrop || this.validateDrop({
              clientX,
              clientY,
              target,
              dropData
            });
            if (droppableElement.scrollContainerRect) {
              return isWithinElement && isDropAllowed && isCoordinateWithinRectangle(clientX, clientY, droppableElement.scrollContainerRect);
            } else {
              return isWithinElement && isDropAllowed;
            }
          }));
          const overlapsChanged$ = overlaps$.pipe(distinctUntilChanged());
          let dragOverActive;
          overlapsChanged$.pipe(filter((overlapsNow) => overlapsNow)).subscribe(() => {
            dragOverActive = true;
            addClass(this.renderer, this.element, this.dragOverClass);
            if (this.dragEnter.observers.length > 0) {
              this.zone.run(() => {
                this.dragEnter.next(currentDragEvent);
              });
            }
          });
          overlaps$.pipe(filter((overlapsNow) => overlapsNow)).subscribe(() => {
            if (this.dragOver.observers.length > 0) {
              this.zone.run(() => {
                this.dragOver.next(currentDragEvent);
              });
            }
          });
          overlapsChanged$.pipe(pairwise(), filter(([didOverlap, overlapsNow]) => didOverlap && !overlapsNow)).subscribe(() => {
            dragOverActive = false;
            removeClass(this.renderer, this.element, this.dragOverClass);
            if (this.dragLeave.observers.length > 0) {
              this.zone.run(() => {
                this.dragLeave.next(currentDragEvent);
              });
            }
          });
          drag$.subscribe({
            complete: () => {
              deregisterScrollListener();
              removeClass(this.renderer, this.element, this.dragActiveClass);
              if (dragOverActive) {
                removeClass(this.renderer, this.element, this.dragOverClass);
                if (this.drop.observers.length > 0) {
                  this.zone.run(() => {
                    this.drop.next(currentDragEvent);
                  });
                }
              }
            }
          });
        });
      }
      ngOnDestroy() {
        if (this.currentDragSubscription) {
          this.currentDragSubscription.unsubscribe();
        }
      }
      static {
        this.\u0275fac = function DroppableDirective_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _DroppableDirective)();
        };
      }
      static {
        this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
          type: _DroppableDirective,
          selectors: [["", "mwlDroppable", ""]],
          inputs: {
            dragOverClass: "dragOverClass",
            dragActiveClass: "dragActiveClass",
            validateDrop: "validateDrop"
          },
          outputs: {
            dragEnter: "dragEnter",
            dragLeave: "dragLeave",
            dragOver: "dragOver",
            drop: "drop"
          }
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DroppableDirective, [{
        type: Directive,
        args: [{
          selector: "[mwlDroppable]"
        }]
      }], null, {
        dragOverClass: [{
          type: Input
        }],
        dragActiveClass: [{
          type: Input
        }],
        validateDrop: [{
          type: Input
        }],
        dragEnter: [{
          type: Output
        }],
        dragLeave: [{
          type: Output
        }],
        dragOver: [{
          type: Output
        }],
        drop: [{
          type: Output
        }]
      });
    })();
    DragAndDropModule = class _DragAndDropModule {
      static {
        this.\u0275fac = function DragAndDropModule_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _DragAndDropModule)();
        };
      }
      static {
        this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
          type: _DragAndDropModule,
          imports: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective],
          exports: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective]
        });
      }
      static {
        this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragAndDropModule, [{
        type: NgModule,
        args: [{
          imports: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective],
          exports: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective]
        }]
      }], null, null);
    })();
  }
});

// node_modules/angular-resizable-element/fesm2022/angular-resizable-element.mjs
function deepCloneNode(node) {
  const clone = node.cloneNode(true);
  const descendantsWithId = clone.querySelectorAll("[id]");
  const nodeName = node.nodeName.toLowerCase();
  clone.removeAttribute("id");
  descendantsWithId.forEach((descendant) => {
    descendant.removeAttribute("id");
  });
  if (nodeName === "canvas") {
    transferCanvasData(node, clone);
  } else if (nodeName === "input" || nodeName === "select" || nodeName === "textarea") {
    transferInputData(node, clone);
  }
  transferData("canvas", node, clone, transferCanvasData);
  transferData("input, textarea, select", node, clone, transferInputData);
  return clone;
}
function transferData(selector, node, clone, callback) {
  const descendantElements = node.querySelectorAll(selector);
  if (descendantElements.length) {
    const cloneElements = clone.querySelectorAll(selector);
    for (let i = 0; i < descendantElements.length; i++) {
      callback(descendantElements[i], cloneElements[i]);
    }
  }
}
function transferInputData(source, clone) {
  if (clone.type !== "file") {
    clone.value = source.value;
  }
  if (clone.type === "radio" && clone.name) {
    clone.name = `mat-clone-${clone.name}-${cloneUniqueId++}`;
  }
}
function transferCanvasData(source, clone) {
  const context = clone.getContext("2d");
  if (context) {
    try {
      context.drawImage(source, 0, 0);
    } catch {
    }
  }
}
function getNewBoundingRectangle(startingRect, edges, clientX, clientY) {
  const newBoundingRect = {
    top: startingRect.top,
    bottom: startingRect.bottom,
    left: startingRect.left,
    right: startingRect.right
  };
  if (edges.top) {
    newBoundingRect.top += clientY;
  }
  if (edges.bottom) {
    newBoundingRect.bottom += clientY;
  }
  if (edges.left) {
    newBoundingRect.left += clientX;
  }
  if (edges.right) {
    newBoundingRect.right += clientX;
  }
  newBoundingRect.height = newBoundingRect.bottom - newBoundingRect.top;
  newBoundingRect.width = newBoundingRect.right - newBoundingRect.left;
  return newBoundingRect;
}
function getElementRect(element, ghostElementPositioning) {
  let translateX = 0;
  let translateY = 0;
  const style = element.nativeElement.style;
  const transformProperties = ["transform", "-ms-transform", "-moz-transform", "-o-transform"];
  const transform = transformProperties.map((property) => style[property]).find((value) => !!value);
  if (transform && transform.includes("translate")) {
    translateX = transform.replace(/.*translate3?d?\((-?[0-9]*)px, (-?[0-9]*)px.*/, "$1");
    translateY = transform.replace(/.*translate3?d?\((-?[0-9]*)px, (-?[0-9]*)px.*/, "$2");
  }
  if (ghostElementPositioning === "absolute") {
    return {
      height: element.nativeElement.offsetHeight,
      width: element.nativeElement.offsetWidth,
      top: element.nativeElement.offsetTop - translateY,
      bottom: element.nativeElement.offsetHeight + element.nativeElement.offsetTop - translateY,
      left: element.nativeElement.offsetLeft - translateX,
      right: element.nativeElement.offsetWidth + element.nativeElement.offsetLeft - translateX
    };
  } else {
    const boundingRect = element.nativeElement.getBoundingClientRect();
    return {
      height: boundingRect.height,
      width: boundingRect.width,
      top: boundingRect.top - translateY,
      bottom: boundingRect.bottom - translateY,
      left: boundingRect.left - translateX,
      right: boundingRect.right - translateX,
      scrollTop: element.nativeElement.scrollTop,
      scrollLeft: element.nativeElement.scrollLeft
    };
  }
}
function getResizeCursor(edges, cursors) {
  if (edges.left && edges.top) {
    return cursors.topLeft;
  } else if (edges.right && edges.top) {
    return cursors.topRight;
  } else if (edges.left && edges.bottom) {
    return cursors.bottomLeft;
  } else if (edges.right && edges.bottom) {
    return cursors.bottomRight;
  } else if (edges.left || edges.right) {
    return cursors.leftOrRight;
  } else if (edges.top || edges.bottom) {
    return cursors.topOrBottom;
  } else {
    return "";
  }
}
function getEdgesDiff({
  edges,
  initialRectangle,
  newRectangle
}) {
  const edgesDiff = {};
  Object.keys(edges).forEach((edge) => {
    edgesDiff[edge] = (newRectangle[edge] || 0) - (initialRectangle[edge] || 0);
  });
  return edgesDiff;
}
var IS_TOUCH_DEVICE, cloneUniqueId, DEFAULT_RESIZE_CURSORS, RESIZE_ACTIVE_CLASS, RESIZE_GHOST_ELEMENT_CLASS, MOUSE_MOVE_THROTTLE_MS, ResizableDirective, PointerEventListeners, ResizeHandleDirective, ResizableModule;
var init_angular_resizable_element = __esm({
  "node_modules/angular-resizable-element/fesm2022/angular-resizable-element.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_common();
    init_esm();
    init_operators();
    IS_TOUCH_DEVICE = (() => {
      if (typeof window === "undefined") {
        return false;
      } else {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
      }
    })();
    cloneUniqueId = 0;
    DEFAULT_RESIZE_CURSORS = Object.freeze({
      topLeft: "nw-resize",
      topRight: "ne-resize",
      bottomLeft: "sw-resize",
      bottomRight: "se-resize",
      leftOrRight: "col-resize",
      topOrBottom: "row-resize"
    });
    RESIZE_ACTIVE_CLASS = "resize-active";
    RESIZE_GHOST_ELEMENT_CLASS = "resize-ghost-element";
    MOUSE_MOVE_THROTTLE_MS = 50;
    ResizableDirective = class _ResizableDirective {
      /**
       * @hidden
       */
      constructor() {
        this.enableGhostResize = false;
        this.resizeSnapGrid = {};
        this.resizeCursors = DEFAULT_RESIZE_CURSORS;
        this.ghostElementPositioning = "fixed";
        this.allowNegativeResizes = false;
        this.mouseMoveThrottleMS = MOUSE_MOVE_THROTTLE_MS;
        this.resizeStart = new EventEmitter();
        this.resizing = new EventEmitter();
        this.resizeEnd = new EventEmitter();
        this.mouseup = new Subject();
        this.mousedown = new Subject();
        this.mousemove = new Subject();
        this.destroy$ = new Subject();
        this.platformId = inject(PLATFORM_ID);
        this.renderer = inject(Renderer2);
        this.elm = inject(ElementRef);
        this.zone = inject(NgZone);
        this.rendererFactory = inject(RendererFactory2);
        this.document = inject(DOCUMENT);
        this.pointerEventListeners = PointerEventListeners.getInstance(this.rendererFactory.createRenderer(this.document, null), this.zone);
      }
      /**
       * @hidden
       */
      ngOnInit() {
        const mousedown$ = merge(this.pointerEventListeners.pointerDown, this.mousedown);
        const mousemove$ = merge(this.pointerEventListeners.pointerMove, this.mousemove).pipe(tap(({
          event
        }) => {
          if (currentResize && event.cancelable) {
            event.preventDefault();
          }
        }), share());
        const mouseup$ = merge(this.pointerEventListeners.pointerUp, this.mouseup);
        let currentResize;
        const removeGhostElement = () => {
          if (currentResize && currentResize.clonedNode) {
            this.elm.nativeElement.parentElement.removeChild(currentResize.clonedNode);
            this.renderer.setStyle(this.elm.nativeElement, "visibility", "inherit");
          }
        };
        const getResizeCursors = () => {
          return __spreadValues(__spreadValues({}, DEFAULT_RESIZE_CURSORS), this.resizeCursors);
        };
        const mousedrag = mousedown$.pipe(mergeMap((startCoords) => {
          function getDiff(moveCoords) {
            return {
              clientX: moveCoords.clientX - startCoords.clientX,
              clientY: moveCoords.clientY - startCoords.clientY
            };
          }
          const getSnapGrid = () => {
            const snapGrid = {
              x: 1,
              y: 1
            };
            if (currentResize) {
              if (this.resizeSnapGrid.left && currentResize.edges.left) {
                snapGrid.x = +this.resizeSnapGrid.left;
              } else if (this.resizeSnapGrid.right && currentResize.edges.right) {
                snapGrid.x = +this.resizeSnapGrid.right;
              }
              if (this.resizeSnapGrid.top && currentResize.edges.top) {
                snapGrid.y = +this.resizeSnapGrid.top;
              } else if (this.resizeSnapGrid.bottom && currentResize.edges.bottom) {
                snapGrid.y = +this.resizeSnapGrid.bottom;
              }
            }
            return snapGrid;
          };
          function getGrid(coords, snapGrid) {
            return {
              x: Math.ceil(coords.clientX / snapGrid.x),
              y: Math.ceil(coords.clientY / snapGrid.y)
            };
          }
          return merge(mousemove$.pipe(take(1)).pipe(map((coords) => [, coords])), mousemove$.pipe(pairwise())).pipe(map(([previousCoords, newCoords]) => {
            return [previousCoords ? getDiff(previousCoords) : previousCoords, getDiff(newCoords)];
          })).pipe(filter(([previousCoords, newCoords]) => {
            if (!previousCoords) {
              return true;
            }
            const snapGrid = getSnapGrid();
            const previousGrid = getGrid(previousCoords, snapGrid);
            const newGrid = getGrid(newCoords, snapGrid);
            return previousGrid.x !== newGrid.x || previousGrid.y !== newGrid.y;
          })).pipe(map(([, newCoords]) => {
            const snapGrid = getSnapGrid();
            return {
              clientX: Math.round(newCoords.clientX / snapGrid.x) * snapGrid.x,
              clientY: Math.round(newCoords.clientY / snapGrid.y) * snapGrid.y
            };
          })).pipe(takeUntil(merge(mouseup$, mousedown$)));
        })).pipe(filter(() => !!currentResize));
        mousedrag.pipe(map(({
          clientX,
          clientY
        }) => {
          return getNewBoundingRectangle(currentResize.startingRect, currentResize.edges, clientX, clientY);
        })).pipe(filter((newBoundingRect) => {
          return this.allowNegativeResizes || !!(newBoundingRect.height && newBoundingRect.width && newBoundingRect.height > 0 && newBoundingRect.width > 0);
        })).pipe(filter((newBoundingRect) => {
          return this.validateResize ? this.validateResize({
            rectangle: newBoundingRect,
            edges: getEdgesDiff({
              edges: currentResize.edges,
              initialRectangle: currentResize.startingRect,
              newRectangle: newBoundingRect
            })
          }) : true;
        }), takeUntil(this.destroy$)).subscribe((newBoundingRect) => {
          if (currentResize && currentResize.clonedNode) {
            this.renderer.setStyle(currentResize.clonedNode, "height", `${newBoundingRect.height}px`);
            this.renderer.setStyle(currentResize.clonedNode, "width", `${newBoundingRect.width}px`);
            this.renderer.setStyle(currentResize.clonedNode, "top", `${newBoundingRect.top}px`);
            this.renderer.setStyle(currentResize.clonedNode, "left", `${newBoundingRect.left}px`);
          }
          if (this.resizing.observers.length > 0) {
            this.zone.run(() => {
              this.resizing.emit({
                edges: getEdgesDiff({
                  edges: currentResize.edges,
                  initialRectangle: currentResize.startingRect,
                  newRectangle: newBoundingRect
                }),
                rectangle: newBoundingRect
              });
            });
          }
          currentResize.currentRect = newBoundingRect;
        });
        mousedown$.pipe(map(({
          edges
        }) => {
          return edges || {};
        }), filter((edges) => {
          return Object.keys(edges).length > 0;
        }), takeUntil(this.destroy$)).subscribe((edges) => {
          if (currentResize) {
            removeGhostElement();
          }
          const startingRect = getElementRect(this.elm, this.ghostElementPositioning);
          currentResize = {
            edges,
            startingRect,
            currentRect: startingRect
          };
          const resizeCursors = getResizeCursors();
          const cursor = getResizeCursor(currentResize.edges, resizeCursors);
          this.renderer.setStyle(document.body, "cursor", cursor);
          this.setElementClass(this.elm, RESIZE_ACTIVE_CLASS, true);
          if (this.enableGhostResize) {
            currentResize.clonedNode = deepCloneNode(this.elm.nativeElement);
            this.elm.nativeElement.parentElement.appendChild(currentResize.clonedNode);
            this.renderer.setStyle(this.elm.nativeElement, "visibility", "hidden");
            this.renderer.setStyle(currentResize.clonedNode, "position", this.ghostElementPositioning);
            this.renderer.setStyle(currentResize.clonedNode, "left", `${currentResize.startingRect.left}px`);
            this.renderer.setStyle(currentResize.clonedNode, "top", `${currentResize.startingRect.top}px`);
            this.renderer.setStyle(currentResize.clonedNode, "height", `${currentResize.startingRect.height}px`);
            this.renderer.setStyle(currentResize.clonedNode, "width", `${currentResize.startingRect.width}px`);
            this.renderer.setStyle(currentResize.clonedNode, "cursor", getResizeCursor(currentResize.edges, resizeCursors));
            this.renderer.addClass(currentResize.clonedNode, RESIZE_GHOST_ELEMENT_CLASS);
            currentResize.clonedNode.scrollTop = currentResize.startingRect.scrollTop;
            currentResize.clonedNode.scrollLeft = currentResize.startingRect.scrollLeft;
          }
          if (this.resizeStart.observers.length > 0) {
            this.zone.run(() => {
              this.resizeStart.emit({
                edges: getEdgesDiff({
                  edges,
                  initialRectangle: startingRect,
                  newRectangle: startingRect
                }),
                rectangle: getNewBoundingRectangle(startingRect, {}, 0, 0)
              });
            });
          }
        });
        mouseup$.pipe(takeUntil(this.destroy$)).subscribe(() => {
          if (currentResize) {
            this.renderer.removeClass(this.elm.nativeElement, RESIZE_ACTIVE_CLASS);
            this.renderer.setStyle(document.body, "cursor", "");
            this.renderer.setStyle(this.elm.nativeElement, "cursor", "");
            if (this.resizeEnd.observers.length > 0) {
              this.zone.run(() => {
                this.resizeEnd.emit({
                  edges: getEdgesDiff({
                    edges: currentResize.edges,
                    initialRectangle: currentResize.startingRect,
                    newRectangle: currentResize.currentRect
                  }),
                  rectangle: currentResize.currentRect
                });
              });
            }
            removeGhostElement();
            currentResize = null;
          }
        });
      }
      /**
       * @hidden
       */
      ngOnDestroy() {
        if (isPlatformBrowser(this.platformId)) {
          this.renderer.setStyle(document.body, "cursor", "");
        }
        this.mousedown.complete();
        this.mouseup.complete();
        this.mousemove.complete();
        this.destroy$.next();
      }
      setElementClass(elm, name, add) {
        if (add) {
          this.renderer.addClass(elm.nativeElement, name);
        } else {
          this.renderer.removeClass(elm.nativeElement, name);
        }
      }
      static {
        this.\u0275fac = function ResizableDirective_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _ResizableDirective)();
        };
      }
      static {
        this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
          type: _ResizableDirective,
          selectors: [["", "mwlResizable", ""]],
          inputs: {
            validateResize: "validateResize",
            enableGhostResize: "enableGhostResize",
            resizeSnapGrid: "resizeSnapGrid",
            resizeCursors: "resizeCursors",
            ghostElementPositioning: "ghostElementPositioning",
            allowNegativeResizes: "allowNegativeResizes",
            mouseMoveThrottleMS: "mouseMoveThrottleMS"
          },
          outputs: {
            resizeStart: "resizeStart",
            resizing: "resizing",
            resizeEnd: "resizeEnd"
          },
          exportAs: ["mwlResizable"]
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizableDirective, [{
        type: Directive,
        args: [{
          selector: "[mwlResizable]",
          exportAs: "mwlResizable"
        }]
      }], () => [], {
        validateResize: [{
          type: Input
        }],
        enableGhostResize: [{
          type: Input
        }],
        resizeSnapGrid: [{
          type: Input
        }],
        resizeCursors: [{
          type: Input
        }],
        ghostElementPositioning: [{
          type: Input
        }],
        allowNegativeResizes: [{
          type: Input
        }],
        mouseMoveThrottleMS: [{
          type: Input
        }],
        resizeStart: [{
          type: Output
        }],
        resizing: [{
          type: Output
        }],
        resizeEnd: [{
          type: Output
        }]
      });
    })();
    PointerEventListeners = class _PointerEventListeners {
      static getInstance(renderer, zone) {
        if (!_PointerEventListeners.instance) {
          _PointerEventListeners.instance = new _PointerEventListeners(renderer, zone);
        }
        return _PointerEventListeners.instance;
      }
      constructor(renderer, zone) {
        this.pointerDown = new Observable((observer) => {
          let unsubscribeMouseDown;
          let unsubscribeTouchStart;
          zone.runOutsideAngular(() => {
            unsubscribeMouseDown = renderer.listen("document", "mousedown", (event) => {
              observer.next({
                clientX: event.clientX,
                clientY: event.clientY,
                event
              });
            });
            if (IS_TOUCH_DEVICE) {
              unsubscribeTouchStart = renderer.listen("document", "touchstart", (event) => {
                observer.next({
                  clientX: event.touches[0].clientX,
                  clientY: event.touches[0].clientY,
                  event
                });
              });
            }
          });
          return () => {
            unsubscribeMouseDown();
            if (IS_TOUCH_DEVICE) {
              unsubscribeTouchStart();
            }
          };
        }).pipe(share());
        this.pointerMove = new Observable((observer) => {
          let unsubscribeMouseMove;
          let unsubscribeTouchMove;
          zone.runOutsideAngular(() => {
            unsubscribeMouseMove = renderer.listen("document", "mousemove", (event) => {
              observer.next({
                clientX: event.clientX,
                clientY: event.clientY,
                event
              });
            });
            if (IS_TOUCH_DEVICE) {
              unsubscribeTouchMove = renderer.listen("document", "touchmove", (event) => {
                observer.next({
                  clientX: event.targetTouches[0].clientX,
                  clientY: event.targetTouches[0].clientY,
                  event
                });
              });
            }
          });
          return () => {
            unsubscribeMouseMove();
            if (IS_TOUCH_DEVICE) {
              unsubscribeTouchMove();
            }
          };
        }).pipe(share());
        this.pointerUp = new Observable((observer) => {
          let unsubscribeMouseUp;
          let unsubscribeTouchEnd;
          let unsubscribeTouchCancel;
          zone.runOutsideAngular(() => {
            unsubscribeMouseUp = renderer.listen("document", "mouseup", (event) => {
              observer.next({
                clientX: event.clientX,
                clientY: event.clientY,
                event
              });
            });
            if (IS_TOUCH_DEVICE) {
              unsubscribeTouchEnd = renderer.listen("document", "touchend", (event) => {
                observer.next({
                  clientX: event.changedTouches[0].clientX,
                  clientY: event.changedTouches[0].clientY,
                  event
                });
              });
              unsubscribeTouchCancel = renderer.listen("document", "touchcancel", (event) => {
                observer.next({
                  clientX: event.changedTouches[0].clientX,
                  clientY: event.changedTouches[0].clientY,
                  event
                });
              });
            }
          });
          return () => {
            unsubscribeMouseUp();
            if (IS_TOUCH_DEVICE) {
              unsubscribeTouchEnd();
              unsubscribeTouchCancel();
            }
          };
        }).pipe(share());
      }
    };
    ResizeHandleDirective = class _ResizeHandleDirective {
      constructor() {
        this.renderer = inject(Renderer2);
        this.element = inject(ElementRef);
        this.zone = inject(NgZone);
        this.resizableDirective = inject(ResizableDirective, {
          optional: true
        });
        this.resizeEdges = {};
        this.eventListeners = {};
        this.destroy$ = new Subject();
      }
      ngOnInit() {
        this.zone.runOutsideAngular(() => {
          this.listenOnTheHost("mousedown").subscribe((event) => {
            this.onMousedown(event, event.clientX, event.clientY);
          });
          this.listenOnTheHost("mouseup").subscribe((event) => {
            this.onMouseup(event.clientX, event.clientY);
          });
          if (IS_TOUCH_DEVICE) {
            this.listenOnTheHost("touchstart").subscribe((event) => {
              this.onMousedown(event, event.touches[0].clientX, event.touches[0].clientY);
            });
            merge(this.listenOnTheHost("touchend"), this.listenOnTheHost("touchcancel")).subscribe((event) => {
              this.onMouseup(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
            });
          }
        });
      }
      ngOnDestroy() {
        this.destroy$.next();
        this.unsubscribeEventListeners();
      }
      /**
       * @hidden
       */
      onMousedown(event, clientX, clientY) {
        if (event.cancelable) {
          event.preventDefault();
        }
        if (!this.eventListeners.touchmove) {
          this.eventListeners.touchmove = this.renderer.listen(this.element.nativeElement, "touchmove", (touchMoveEvent) => {
            this.onMousemove(touchMoveEvent, touchMoveEvent.targetTouches[0].clientX, touchMoveEvent.targetTouches[0].clientY);
          });
        }
        if (!this.eventListeners.mousemove) {
          this.eventListeners.mousemove = this.renderer.listen(this.element.nativeElement, "mousemove", (mouseMoveEvent) => {
            this.onMousemove(mouseMoveEvent, mouseMoveEvent.clientX, mouseMoveEvent.clientY);
          });
        }
        this.resizable.mousedown.next({
          clientX,
          clientY,
          edges: this.resizeEdges
        });
      }
      /**
       * @hidden
       */
      onMouseup(clientX, clientY) {
        this.unsubscribeEventListeners();
        this.resizable.mouseup.next({
          clientX,
          clientY,
          edges: this.resizeEdges
        });
      }
      // directive might be passed from DI or as an input
      get resizable() {
        return this.resizableDirective || this.resizableContainer;
      }
      onMousemove(event, clientX, clientY) {
        this.resizable.mousemove.next({
          clientX,
          clientY,
          edges: this.resizeEdges,
          event
        });
      }
      unsubscribeEventListeners() {
        Object.keys(this.eventListeners).forEach((type) => {
          this.eventListeners[type]();
          delete this.eventListeners[type];
        });
      }
      listenOnTheHost(eventName) {
        return fromEvent(this.element.nativeElement, eventName).pipe(takeUntil(this.destroy$));
      }
      static {
        this.\u0275fac = function ResizeHandleDirective_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _ResizeHandleDirective)();
        };
      }
      static {
        this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
          type: _ResizeHandleDirective,
          selectors: [["", "mwlResizeHandle", ""]],
          inputs: {
            resizeEdges: "resizeEdges",
            resizableContainer: "resizableContainer"
          }
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeHandleDirective, [{
        type: Directive,
        args: [{
          selector: "[mwlResizeHandle]"
        }]
      }], null, {
        resizeEdges: [{
          type: Input
        }],
        resizableContainer: [{
          type: Input
        }]
      });
    })();
    ResizableModule = class _ResizableModule {
      static {
        this.\u0275fac = function ResizableModule_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _ResizableModule)();
        };
      }
      static {
        this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
          type: _ResizableModule,
          imports: [ResizableDirective, ResizeHandleDirective],
          exports: [ResizableDirective, ResizeHandleDirective]
        });
      }
      static {
        this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizableModule, [{
        type: NgModule,
        args: [{
          imports: [ResizableDirective, ResizeHandleDirective],
          exports: [ResizableDirective, ResizeHandleDirective]
        }]
      }], null, null);
    })();
  }
});

// node_modules/angular-calendar/fesm2022/angular-calendar.mjs
function CalendarEventActionsComponent_ng_template_0_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275pipe(1, "calendarA11y");
    \u0275\u0275listener("mwlClick", function CalendarEventActionsComponent_ng_template_0_Conditional_0_For_2_Template_a_mwlClick_0_listener($event) {
      const action_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const event_r3 = \u0275\u0275nextContext(2).event;
      return \u0275\u0275resetView(action_r2.onClick({
        event: event_r3,
        sourceEvent: $event
      }));
    })("mwlKeydownEnter", function CalendarEventActionsComponent_ng_template_0_Conditional_0_For_2_Template_a_mwlKeydownEnter_0_listener($event) {
      const action_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const event_r3 = \u0275\u0275nextContext(2).event;
      return \u0275\u0275resetView(action_r2.onClick({
        event: event_r3,
        sourceEvent: $event
      }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const action_r2 = ctx.$implicit;
    \u0275\u0275property("ngClass", action_r2.cssClass)("innerHtml", action_r2.label, \u0275\u0275sanitizeHtml);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(1, 3, \u0275\u0275pureFunction1(6, _c1, action_r2), "actionButtonLabel"));
  }
}
function CalendarEventActionsComponent_ng_template_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275repeaterCreate(1, CalendarEventActionsComponent_ng_template_0_Conditional_0_For_2_Template, 2, 8, "a", 3, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r3 = \u0275\u0275nextContext().event;
    \u0275\u0275advance();
    \u0275\u0275repeater(event_r3.actions);
  }
}
function CalendarEventActionsComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CalendarEventActionsComponent_ng_template_0_Conditional_0_Template, 3, 0, "span", 2);
  }
  if (rf & 2) {
    const event_r3 = ctx.event;
    \u0275\u0275conditional(event_r3.actions ? 0 : -1);
  }
}
function CalendarEventActionsComponent_ng_template_2_Template(rf, ctx) {
}
function CalendarEventTitleComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 2);
    \u0275\u0275pipe(1, "calendarEventTitle");
    \u0275\u0275pipe(2, "calendarA11y");
  }
  if (rf & 2) {
    const event_r1 = ctx.event;
    const view_r2 = ctx.view;
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind3(1, 2, event_r1.title, view_r2, event_r1), \u0275\u0275sanitizeHtml);
    \u0275\u0275attribute("aria-hidden", \u0275\u0275pipeBind2(2, 6, \u0275\u0275pureFunction0(9, _c3), "hideEventTitle"));
  }
}
function CalendarEventTitleComponent_ng_template_2_Template(rf, ctx) {
}
function CalendarTooltipWindowComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "div", 3)(2, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const contents_r1 = ctx.contents;
    const placement_r2 = ctx.placement;
    \u0275\u0275property("ngClass", "cal-tooltip-" + placement_r2);
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHtml", contents_r1, \u0275\u0275sanitizeHtml);
  }
}
function CalendarTooltipWindowComponent_ng_template_2_Template(rf, ctx) {
}
function CalendarMonthViewHeaderComponent_ng_template_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275listener("click", function CalendarMonthViewHeaderComponent_ng_template_0_For_2_Template_div_click_0_listener($event) {
      const day_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.columnHeaderClicked.emit({
        isoDayNumber: day_r2.day,
        sourceEvent: $event
      }));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "calendarDate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r2 = ctx.$implicit;
    const locale_r4 = \u0275\u0275nextContext().locale;
    \u0275\u0275classProp("cal-past", day_r2.isPast)("cal-today", day_r2.isToday)("cal-future", day_r2.isFuture)("cal-weekend", day_r2.isWeekend);
    \u0275\u0275property("ngClass", day_r2.cssClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 10, day_r2.date, "monthViewColumnHeader", locale_r4), " ");
  }
}
function CalendarMonthViewHeaderComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, CalendarMonthViewHeaderComponent_ng_template_0_For_2_Template, 3, 14, "div", 3, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const days_r5 = ctx.days;
    \u0275\u0275advance();
    \u0275\u0275repeater(days_r5);
  }
}
function CalendarMonthViewHeaderComponent_ng_template_2_Template(rf, ctx) {
}
function CalendarMonthCellComponent_ng_template_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r1 = \u0275\u0275nextContext().day;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(day_r1.badgeTotal);
  }
}
function CalendarMonthCellComponent_ng_template_0_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275pipe(1, "calendarEventTitle");
    \u0275\u0275pipe(2, "calendarA11y");
    \u0275\u0275listener("mouseenter", function CalendarMonthCellComponent_ng_template_0_Conditional_7_For_2_Template_div_mouseenter_0_listener() {
      const event_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const highlightDay_r4 = \u0275\u0275nextContext(2).highlightDay;
      return \u0275\u0275resetView(highlightDay_r4.emit({
        event: event_r3
      }));
    })("mouseleave", function CalendarMonthCellComponent_ng_template_0_Conditional_7_For_2_Template_div_mouseleave_0_listener() {
      const event_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const unhighlightDay_r5 = \u0275\u0275nextContext(2).unhighlightDay;
      return \u0275\u0275resetView(unhighlightDay_r5.emit({
        event: event_r3
      }));
    })("mwlClick", function CalendarMonthCellComponent_ng_template_0_Conditional_7_For_2_Template_div_mwlClick_0_listener($event) {
      const event_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const eventClicked_r6 = \u0275\u0275nextContext(2).eventClicked;
      return \u0275\u0275resetView(eventClicked_r6.emit({
        event: event_r3,
        sourceEvent: $event
      }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r3 = ctx.$implicit;
    const ctx_r6 = \u0275\u0275nextContext(2);
    const day_r1 = ctx_r6.day;
    const tooltipPlacement_r8 = ctx_r6.tooltipPlacement;
    const tooltipTemplate_r9 = ctx_r6.tooltipTemplate;
    const tooltipAppendToBody_r10 = ctx_r6.tooltipAppendToBody;
    const tooltipDelay_r11 = ctx_r6.tooltipDelay;
    const validateDrag_r12 = ctx_r6.validateDrag;
    \u0275\u0275classProp("cal-draggable", event_r3.draggable);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(22, _c8, event_r3.color == null ? null : event_r3.color.primary))("ngClass", event_r3 == null ? null : event_r3.cssClass)("mwlCalendarTooltip", \u0275\u0275pipeBind3(1, 15, event_r3.title, "monthTooltip", event_r3))("tooltipPlacement", tooltipPlacement_r8)("tooltipEvent", event_r3)("tooltipTemplate", tooltipTemplate_r9)("tooltipAppendToBody", tooltipAppendToBody_r10)("tooltipDelay", tooltipDelay_r11)("dropData", \u0275\u0275pureFunction2(24, _c9, event_r3, day_r1))("dragAxis", \u0275\u0275pureFunction2(27, _c10, event_r3.draggable, event_r3.draggable))("validateDrag", validateDrag_r12)("touchStartLongPress", \u0275\u0275pureFunction0(30, _c11));
    \u0275\u0275attribute("aria-hidden", \u0275\u0275pipeBind2(2, 19, \u0275\u0275pureFunction0(31, _c3), "hideMonthCellEvents"));
  }
}
function CalendarMonthCellComponent_ng_template_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, CalendarMonthCellComponent_ng_template_0_Conditional_7_For_2_Template, 3, 32, "div", 7, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r1 = \u0275\u0275nextContext().day;
    \u0275\u0275advance();
    \u0275\u0275repeater(day_r1.events);
  }
}
function CalendarMonthCellComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275pipe(1, "calendarA11y");
    \u0275\u0275elementStart(2, "span", 3);
    \u0275\u0275conditionalCreate(3, CalendarMonthCellComponent_ng_template_0_Conditional_3_Template, 2, 1, "span", 4);
    \u0275\u0275elementStart(4, "span", 5);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "calendarDate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(7, CalendarMonthCellComponent_ng_template_0_Conditional_7_Template, 3, 0, "div", 6);
  }
  if (rf & 2) {
    const day_r1 = ctx.day;
    const locale_r13 = ctx.locale;
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(1, 4, \u0275\u0275pureFunction2(11, _c7, day_r1, locale_r13), "monthCell"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(day_r1.badgeTotal > 0 ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(6, 7, day_r1.date, "monthViewDayNumber", locale_r13));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(day_r1.events.length > 0 ? 7 : -1);
  }
}
function CalendarMonthCellComponent_ng_template_2_Template(rf, ctx) {
}
function CalendarOpenDayEventsComponent_ng_template_0_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "span", 7);
    \u0275\u0275text(2, " ");
    \u0275\u0275elementStart(3, "mwl-calendar-event-title", 8);
    \u0275\u0275pipe(4, "calendarA11y");
    \u0275\u0275listener("mwlClick", function CalendarOpenDayEventsComponent_ng_template_0_Conditional_0_For_6_Template_mwl_calendar_event_title_mwlClick_3_listener($event) {
      const event_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const eventClicked_r3 = \u0275\u0275nextContext(2).eventClicked;
      return \u0275\u0275resetView(eventClicked_r3.emit({
        event: event_r2,
        sourceEvent: $event
      }));
    })("mwlKeydownEnter", function CalendarOpenDayEventsComponent_ng_template_0_Conditional_0_For_6_Template_mwl_calendar_event_title_mwlKeydownEnter_3_listener($event) {
      const event_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const eventClicked_r3 = \u0275\u0275nextContext(2).eventClicked;
      return \u0275\u0275resetView(eventClicked_r3.emit({
        event: event_r2,
        sourceEvent: $event
      }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " ");
    \u0275\u0275element(6, "mwl-calendar-event-actions", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r2 = ctx.$implicit;
    const validateDrag_r4 = \u0275\u0275nextContext(2).validateDrag;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classProp("cal-draggable", event_r2.draggable);
    \u0275\u0275property("ngClass", event_r2 == null ? null : event_r2.cssClass)("dropData", \u0275\u0275pureFunction1(16, _c0, event_r2))("dragAxis", \u0275\u0275pureFunction2(18, _c10, event_r2.draggable, event_r2.draggable))("validateDrag", validateDrag_r4)("touchStartLongPress", \u0275\u0275pureFunction0(21, _c11));
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(22, _c8, event_r2.color == null ? null : event_r2.color.primary));
    \u0275\u0275advance(2);
    \u0275\u0275property("event", event_r2)("customTemplate", ctx_r4.eventTitleTemplate);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(4, 13, \u0275\u0275pureFunction2(24, _c14, event_r2, ctx_r4.locale), "eventDescription"));
    \u0275\u0275advance(3);
    \u0275\u0275property("event", event_r2)("customTemplate", ctx_r4.eventActionsTemplate);
  }
}
function CalendarOpenDayEventsComponent_ng_template_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275animateLeave("cal-open-day-events-closing");
    \u0275\u0275element(1, "span", 3);
    \u0275\u0275pipe(2, "calendarA11y");
    \u0275\u0275element(3, "span", 4);
    \u0275\u0275pipe(4, "calendarA11y");
    \u0275\u0275repeaterCreate(5, CalendarOpenDayEventsComponent_ng_template_0_Conditional_0_For_6_Template, 7, 27, "div", 5, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const events_r6 = \u0275\u0275nextContext().events;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(2, 2, \u0275\u0275pureFunction2(8, _c13, ctx_r4.date, ctx_r4.locale), "openDayEventsAlert"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(4, 5, \u0275\u0275pureFunction2(11, _c13, ctx_r4.date, ctx_r4.locale), "openDayEventsLandmark"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(events_r6);
  }
}
function CalendarOpenDayEventsComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CalendarOpenDayEventsComponent_ng_template_0_Conditional_0_Template, 7, 14, "div", 2);
  }
  if (rf & 2) {
    const isOpen_r7 = ctx.isOpen;
    \u0275\u0275conditional(isOpen_r7 ? 0 : -1);
  }
}
function CalendarOpenDayEventsComponent_ng_template_2_Template(rf, ctx) {
}
function CalendarMonthViewComponent_For_4_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mwl-calendar-month-cell", 6);
    \u0275\u0275pipe(1, "calendarA11y");
    \u0275\u0275listener("mwlClick", function CalendarMonthViewComponent_For_4_For_3_Template_mwl_calendar_month_cell_mwlClick_0_listener($event) {
      const day_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.dayClicked.emit({
        day: day_r3,
        sourceEvent: $event
      }));
    })("mwlKeydownEnter", function CalendarMonthViewComponent_For_4_For_3_Template_mwl_calendar_month_cell_mwlKeydownEnter_0_listener($event) {
      const day_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.dayClicked.emit({
        day: day_r3,
        sourceEvent: $event
      }));
    })("highlightDay", function CalendarMonthViewComponent_For_4_For_3_Template_mwl_calendar_month_cell_highlightDay_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleDayHighlight($event.event, true));
    })("unhighlightDay", function CalendarMonthViewComponent_For_4_For_3_Template_mwl_calendar_month_cell_unhighlightDay_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleDayHighlight($event.event, false));
    })("drop", function CalendarMonthViewComponent_For_4_For_3_Template_mwl_calendar_month_cell_drop_0_listener($event) {
      const day_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.eventDropped(day_r3, $event.dropData.event, $event.dropData.draggedFrom));
    })("eventClicked", function CalendarMonthViewComponent_For_4_For_3_Template_mwl_calendar_month_cell_eventClicked_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.eventClicked.emit({
        event: $event.event,
        sourceEvent: $event.sourceEvent
      }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", day_r3 == null ? null : day_r3.cssClass)("day", day_r3)("openDay", ctx_r3.openDay)("locale", ctx_r3.locale)("tooltipPlacement", ctx_r3.tooltipPlacement)("tooltipAppendToBody", ctx_r3.tooltipAppendToBody)("tooltipTemplate", ctx_r3.tooltipTemplate)("tooltipDelay", ctx_r3.tooltipDelay)("customTemplate", ctx_r3.cellTemplate)("ngStyle", \u0275\u0275pureFunction1(15, _c8, day_r3.backgroundColor))("clickListenerDisabled", !ctx_r3.dayClicked.observed);
    \u0275\u0275attribute("tabindex", \u0275\u0275pipeBind2(1, 12, \u0275\u0275pureFunction0(17, _c3), "monthCellTabIndex"));
  }
}
function CalendarMonthViewComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 3);
    \u0275\u0275repeaterCreate(2, CalendarMonthViewComponent_For_4_For_3_Template, 2, 18, "mwl-calendar-month-cell", 4, _forTrack1);
    \u0275\u0275pipe(4, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mwl-calendar-open-day-events", 5);
    \u0275\u0275listener("eventClicked", function CalendarMonthViewComponent_For_4_Template_mwl_calendar_open_day_events_eventClicked_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.eventClicked.emit({
        event: $event.event,
        sourceEvent: $event.sourceEvent
      }));
    })("drop", function CalendarMonthViewComponent_For_4_Template_mwl_calendar_open_day_events_drop_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.eventDropped(ctx_r3.openDay, $event.dropData.event, $event.dropData.draggedFrom));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const rowIndex_r5 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind3(4, 7, ctx_r3.view.days, rowIndex_r5, rowIndex_r5 + ctx_r3.view.totalDaysVisibleInWeek));
    \u0275\u0275advance(3);
    \u0275\u0275property("locale", ctx_r3.locale)("isOpen", ctx_r3.openRowIndex === rowIndex_r5)("events", ctx_r3.openDay == null ? null : ctx_r3.openDay.events)("date", ctx_r3.openDay == null ? null : ctx_r3.openDay.date)("customTemplate", ctx_r3.openDayEventsTemplate)("eventTitleTemplate", ctx_r3.eventTitleTemplate)("eventActionsTemplate", ctx_r3.eventActionsTemplate);
  }
}
function CalendarWeekViewHeaderComponent_ng_template_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275listener("mwlClick", function CalendarWeekViewHeaderComponent_ng_template_0_For_2_Template_div_mwlClick_0_listener($event) {
      const day_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const dayHeaderClicked_r3 = \u0275\u0275nextContext().dayHeaderClicked;
      return \u0275\u0275resetView(dayHeaderClicked_r3.emit({
        day: day_r2,
        sourceEvent: $event
      }));
    })("drop", function CalendarWeekViewHeaderComponent_ng_template_0_For_2_Template_div_drop_0_listener($event) {
      const day_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const eventDropped_r4 = \u0275\u0275nextContext().eventDropped;
      return \u0275\u0275resetView(eventDropped_r4.emit({
        event: $event.dropData.event,
        newStart: day_r2.date
      }));
    })("dragEnter", function CalendarWeekViewHeaderComponent_ng_template_0_For_2_Template_div_dragEnter_0_listener() {
      const day_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const dragEnter_r5 = \u0275\u0275nextContext().dragEnter;
      return \u0275\u0275resetView(dragEnter_r5.emit({
        date: day_r2.date
      }));
    });
    \u0275\u0275elementStart(1, "b");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "calendarDate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "br");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "calendarDate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r2 = ctx.$implicit;
    const locale_r6 = \u0275\u0275nextContext().locale;
    \u0275\u0275classProp("cal-past", day_r2.isPast)("cal-today", day_r2.isToday)("cal-future", day_r2.isFuture)("cal-weekend", day_r2.isWeekend);
    \u0275\u0275property("ngClass", day_r2.cssClass);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(3, 11, day_r2.date, "weekViewColumnHeader", locale_r6));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(7, 15, day_r2.date, "weekViewColumnSubHeader", locale_r6));
  }
}
function CalendarWeekViewHeaderComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, CalendarWeekViewHeaderComponent_ng_template_0_For_2_Template, 8, 19, "div", 3, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const days_r7 = ctx.days;
    \u0275\u0275advance();
    \u0275\u0275repeater(days_r7);
  }
}
function CalendarWeekViewHeaderComponent_ng_template_2_Template(rf, ctx) {
}
function CalendarWeekViewEventComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275pipe(1, "calendarEventTitle");
    \u0275\u0275pipe(2, "calendarA11y");
    \u0275\u0275listener("mwlClick", function CalendarWeekViewEventComponent_ng_template_0_Template_div_mwlClick_0_listener($event) {
      const eventClicked_r2 = \u0275\u0275restoreView(_r1).eventClicked;
      return \u0275\u0275resetView(eventClicked_r2.emit({
        sourceEvent: $event
      }));
    })("mwlKeydownEnter", function CalendarWeekViewEventComponent_ng_template_0_Template_div_mwlKeydownEnter_0_listener($event) {
      const eventClicked_r2 = \u0275\u0275restoreView(_r1).eventClicked;
      return \u0275\u0275resetView(eventClicked_r2.emit({
        sourceEvent: $event
      }));
    });
    \u0275\u0275element(3, "mwl-calendar-event-actions", 3);
    \u0275\u0275text(4, " ");
    \u0275\u0275element(5, "mwl-calendar-event-title", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const weekEvent_r3 = ctx.weekEvent;
    const tooltipPlacement_r4 = ctx.tooltipPlacement;
    const tooltipTemplate_r5 = ctx.tooltipTemplate;
    const tooltipAppendToBody_r6 = ctx.tooltipAppendToBody;
    const tooltipDisabled_r7 = ctx.tooltipDisabled;
    const tooltipDelay_r8 = ctx.tooltipDelay;
    const daysInWeek_r9 = ctx.daysInWeek;
    const ctx_r9 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction3(20, _c17, weekEvent_r3.event.color == null ? null : weekEvent_r3.event.color.secondaryText, weekEvent_r3.event.color == null ? null : weekEvent_r3.event.color.secondary, weekEvent_r3.event.color == null ? null : weekEvent_r3.event.color.primary))("mwlCalendarTooltip", !tooltipDisabled_r7 ? \u0275\u0275pipeBind3(1, 13, weekEvent_r3.event.title, daysInWeek_r9 === 1 ? "dayTooltip" : "weekTooltip", weekEvent_r3.tempEvent || weekEvent_r3.event) : "")("tooltipPlacement", tooltipPlacement_r4)("tooltipEvent", weekEvent_r3.tempEvent || weekEvent_r3.event)("tooltipTemplate", tooltipTemplate_r5)("tooltipAppendToBody", tooltipAppendToBody_r6)("tooltipDelay", tooltipDelay_r8);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(2, 17, \u0275\u0275pureFunction2(24, _c14, weekEvent_r3.tempEvent || weekEvent_r3.event, ctx_r9.locale), "eventDescription"));
    \u0275\u0275advance(3);
    \u0275\u0275property("event", weekEvent_r3.tempEvent || weekEvent_r3.event)("customTemplate", ctx_r9.eventActionsTemplate);
    \u0275\u0275advance(2);
    \u0275\u0275property("event", weekEvent_r3.tempEvent || weekEvent_r3.event)("customTemplate", ctx_r9.eventTitleTemplate)("view", daysInWeek_r9 === 1 ? "day" : "week");
  }
}
function CalendarWeekViewEventComponent_ng_template_2_Template(rf, ctx) {
}
function CalendarWeekViewHourSegmentComponent_ng_template_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "calendarDate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const segment_r2 = ctx_r0.segment;
    const locale_r3 = ctx_r0.locale;
    const daysInWeek_r4 = ctx_r0.daysInWeek;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, segment_r2.displayDate, daysInWeek_r4 === 1 ? "dayViewHour" : "weekViewHour", locale_r3), " ");
  }
}
function CalendarWeekViewHourSegmentComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275pipe(1, "calendarA11y");
    \u0275\u0275conditionalCreate(2, CalendarWeekViewHourSegmentComponent_ng_template_0_Conditional_2_Template, 3, 5, "div", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const segment_r2 = ctx.segment;
    const segmentHeight_r5 = ctx.segmentHeight;
    const isTimeLabel_r6 = ctx.isTimeLabel;
    const daysInWeek_r4 = ctx.daysInWeek;
    \u0275\u0275styleProp("height", segmentHeight_r5, "px");
    \u0275\u0275classProp("cal-hour-start", segment_r2.isStart)("cal-after-hour-start", !segment_r2.isStart);
    \u0275\u0275property("ngClass", segment_r2.cssClass);
    \u0275\u0275attribute("aria-hidden", \u0275\u0275pipeBind2(1, 9, \u0275\u0275pureFunction0(12, _c3), daysInWeek_r4 === 1 ? "hideDayHourSegment" : "hideWeekHourSegment"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(isTimeLabel_r6 ? 2 : -1);
  }
}
function CalendarWeekViewHourSegmentComponent_ng_template_2_Template(rf, ctx) {
}
function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 3);
  }
  if (rf & 2) {
    const topPx_r1 = \u0275\u0275nextContext().topPx;
    \u0275\u0275styleProp("top", topPx_r1, "px");
  }
}
function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_Conditional_0_Template, 1, 2, "div", 2);
  }
  if (rf & 2) {
    const isVisible_r2 = ctx.isVisible;
    \u0275\u0275conditional(isVisible_r2 ? 0 : -1);
  }
}
function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_2_Template(rf, ctx) {
}
function CalendarWeekViewComponent_Conditional_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CalendarWeekViewComponent_Conditional_2_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("drop", function CalendarWeekViewComponent_Conditional_2_For_6_Template_div_drop_0_listener($event) {
      const day_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.eventDropped($event, day_r5.date, true));
    })("dragEnter", function CalendarWeekViewComponent_Conditional_2_For_6_Template_div_dragEnter_0_listener() {
      const day_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.dateDragEnter(day_r5.date));
    });
    \u0275\u0275elementEnd();
  }
}
function CalendarWeekViewComponent_Conditional_2_For_8_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 19);
  }
  if (rf & 2) {
    \u0275\u0275property("resizeEdges", \u0275\u0275pureFunction0(1, _c23));
  }
}
function CalendarWeekViewComponent_Conditional_2_For_8_For_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 21);
  }
  if (rf & 2) {
    \u0275\u0275property("resizeEdges", \u0275\u0275pureFunction0(1, _c24));
  }
}
function CalendarWeekViewComponent_Conditional_2_For_8_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18, 3);
    \u0275\u0275listener("resizeStart", function CalendarWeekViewComponent_Conditional_2_For_8_For_3_Template_div_resizeStart_0_listener($event) {
      const allDayEvent_r7 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275nextContext();
      const eventRowContainer_r8 = \u0275\u0275reference(1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.allDayEventResizeStarted(eventRowContainer_r8, allDayEvent_r7, $event));
    })("resizing", function CalendarWeekViewComponent_Conditional_2_For_8_For_3_Template_div_resizing_0_listener($event) {
      const allDayEvent_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.allDayEventResizing(allDayEvent_r7, $event, ctx_r2.dayColumnWidth));
    })("resizeEnd", function CalendarWeekViewComponent_Conditional_2_For_8_For_3_Template_div_resizeEnd_0_listener() {
      const allDayEvent_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.allDayEventResizeEnded(allDayEvent_r7));
    })("dragStart", function CalendarWeekViewComponent_Conditional_2_For_8_For_3_Template_div_dragStart_0_listener() {
      const allDayEvent_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const event_r9 = \u0275\u0275reference(1);
      \u0275\u0275nextContext();
      const eventRowContainer_r8 = \u0275\u0275reference(1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.dragStarted(eventRowContainer_r8, event_r9, allDayEvent_r7, false));
    })("dragging", function CalendarWeekViewComponent_Conditional_2_For_8_For_3_Template_div_dragging_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.allDayEventDragMove());
    })("dragEnd", function CalendarWeekViewComponent_Conditional_2_For_8_For_3_Template_div_dragEnd_0_listener($event) {
      const allDayEvent_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.dragEnded(allDayEvent_r7, $event, ctx_r2.dayColumnWidth));
    });
    \u0275\u0275conditionalCreate(2, CalendarWeekViewComponent_Conditional_2_For_8_For_3_Conditional_2_Template, 1, 2, "div", 19);
    \u0275\u0275elementStart(3, "mwl-calendar-week-view-event", 20);
    \u0275\u0275listener("eventClicked", function CalendarWeekViewComponent_Conditional_2_For_8_For_3_Template_mwl_calendar_week_view_event_eventClicked_3_listener($event) {
      const allDayEvent_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.eventClicked.emit({
        event: allDayEvent_r7.event,
        sourceEvent: $event.sourceEvent
      }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, CalendarWeekViewComponent_Conditional_2_For_8_For_3_Conditional_4_Template, 1, 2, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const allDayEvent_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("width", 100 / ctx_r2.days.length * allDayEvent_r7.span, "%")("margin-left", ctx_r2.rtl ? null : 100 / ctx_r2.days.length * allDayEvent_r7.offset, "%")("margin-right", ctx_r2.rtl ? 100 / ctx_r2.days.length * allDayEvent_r7.offset : null, "%");
    \u0275\u0275classProp("cal-draggable", allDayEvent_r7.event.draggable && ctx_r2.allDayEventResizes.size === 0)("cal-starts-within-week", !allDayEvent_r7.startsBeforeWeek)("cal-ends-within-week", !allDayEvent_r7.endsAfterWeek);
    \u0275\u0275property("ngClass", allDayEvent_r7.event == null ? null : allDayEvent_r7.event.cssClass)("resizeCursors", ctx_r2.resizeCursors)("resizeSnapGrid", \u0275\u0275pureFunction2(33, _c20, ctx_r2.dayColumnWidth, ctx_r2.dayColumnWidth))("validateResize", ctx_r2.validateResize)("dropData", \u0275\u0275pureFunction2(36, _c21, allDayEvent_r7.event, ctx_r2.calendarId))("dragAxis", \u0275\u0275pureFunction2(39, _c10, allDayEvent_r7.event.draggable && ctx_r2.allDayEventResizes.size === 0, !ctx_r2.snapDraggedEvents && allDayEvent_r7.event.draggable && ctx_r2.allDayEventResizes.size === 0))("dragSnapGrid", ctx_r2.snapDraggedEvents ? \u0275\u0275pureFunction1(42, _c22, ctx_r2.dayColumnWidth) : \u0275\u0275pureFunction0(44, _c3))("validateDrag", ctx_r2.validateDrag)("touchStartLongPress", \u0275\u0275pureFunction0(45, _c11));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((allDayEvent_r7.event == null ? null : allDayEvent_r7.event.resizable == null ? null : allDayEvent_r7.event.resizable.beforeStart) && !allDayEvent_r7.startsBeforeWeek ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("locale", ctx_r2.locale)("weekEvent", allDayEvent_r7)("tooltipPlacement", ctx_r2.tooltipPlacement)("tooltipTemplate", ctx_r2.tooltipTemplate)("tooltipAppendToBody", ctx_r2.tooltipAppendToBody)("tooltipDelay", ctx_r2.tooltipDelay)("customTemplate", ctx_r2.eventTemplate)("eventTitleTemplate", ctx_r2.eventTitleTemplate)("eventActionsTemplate", ctx_r2.eventActionsTemplate)("daysInWeek", ctx_r2.daysInWeek);
    \u0275\u0275advance();
    \u0275\u0275conditional((allDayEvent_r7.event == null ? null : allDayEvent_r7.event.resizable == null ? null : allDayEvent_r7.event.resizable.afterEnd) && !allDayEvent_r7.endsAfterWeek ? 4 : -1);
  }
}
function CalendarWeekViewComponent_Conditional_2_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15, 2);
    \u0275\u0275repeaterCreate(2, CalendarWeekViewComponent_Conditional_2_For_8_For_3_Template, 5, 46, "div", 17, _forTrack4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const eventRow_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275repeater(eventRow_r10.row);
  }
}
function CalendarWeekViewComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12, 1);
    \u0275\u0275listener("dragEnter", function CalendarWeekViewComponent_Conditional_2_Template_div_dragEnter_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dragEnter("allDay"));
    })("dragLeave", function CalendarWeekViewComponent_Conditional_2_Template_div_dragLeave_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dragLeave("allDay"));
    });
    \u0275\u0275elementStart(2, "div", 10)(3, "div", 9);
    \u0275\u0275template(4, CalendarWeekViewComponent_Conditional_2_ng_container_4_Template, 1, 0, "ng-container", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, CalendarWeekViewComponent_Conditional_2_For_6_Template, 1, 0, "div", 14, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(7, CalendarWeekViewComponent_Conditional_2_For_8_Template, 4, 0, "div", 15, _forTrack3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.allDayEventsLabelTemplate);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.days);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.view.allDayEventRows);
  }
}
function CalendarWeekViewComponent_Conditional_4_For_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mwl-calendar-week-view-hour-segment", 25);
  }
  if (rf & 2) {
    const segment_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("height", ctx_r2.hourSegmentHeight, "px");
    \u0275\u0275property("segment", segment_r11)("segmentHeight", ctx_r2.hourSegmentHeight)("locale", ctx_r2.locale)("customTemplate", ctx_r2.hourSegmentTemplate)("isTimeLabel", true)("daysInWeek", ctx_r2.daysInWeek);
  }
}
function CalendarWeekViewComponent_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275repeaterCreate(1, CalendarWeekViewComponent_Conditional_4_For_2_For_2_Template, 1, 8, "mwl-calendar-week-view-hour-segment", 24, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const hour_r12 = ctx.$implicit;
    const \u0275$index_38_r13 = ctx.$index;
    \u0275\u0275classProp("cal-hour-odd", \u0275$index_38_r13 % 2 !== 0);
    \u0275\u0275advance();
    \u0275\u0275repeater(hour_r12.segments);
  }
}
function CalendarWeekViewComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275repeaterCreate(1, CalendarWeekViewComponent_Conditional_4_For_2_Template, 3, 2, "div", 22, _forTrack5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.view.hourColumns[0].hours);
  }
}
function CalendarWeekViewComponent_For_8_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 19);
  }
  if (rf & 2) {
    \u0275\u0275property("resizeEdges", \u0275\u0275pureFunction0(1, _c26));
  }
}
function CalendarWeekViewComponent_For_8_For_4_ng_template_3_Template(rf, ctx) {
}
function CalendarWeekViewComponent_For_8_For_4_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mwl-calendar-week-view-event", 31);
    \u0275\u0275listener("eventClicked", function CalendarWeekViewComponent_For_8_For_4_ng_template_4_Template_mwl_calendar_week_view_event_eventClicked_0_listener($event) {
      \u0275\u0275restoreView(_r18);
      const timeEvent_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.eventClicked.emit({
        event: timeEvent_r15.event,
        sourceEvent: $event.sourceEvent
      }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const timeEvent_r15 = \u0275\u0275nextContext().$implicit;
    const column_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("locale", ctx_r2.locale)("weekEvent", timeEvent_r15)("tooltipPlacement", ctx_r2.tooltipPlacement)("tooltipTemplate", ctx_r2.tooltipTemplate)("tooltipAppendToBody", ctx_r2.tooltipAppendToBody)("tooltipDisabled", ctx_r2.dragActive || ctx_r2.timeEventResizes.size > 0)("tooltipDelay", ctx_r2.tooltipDelay)("customTemplate", ctx_r2.eventTemplate)("eventTitleTemplate", ctx_r2.eventTitleTemplate)("eventActionsTemplate", ctx_r2.eventActionsTemplate)("column", column_r19)("daysInWeek", ctx_r2.daysInWeek);
  }
}
function CalendarWeekViewComponent_For_8_For_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 21);
  }
  if (rf & 2) {
    \u0275\u0275property("resizeEdges", \u0275\u0275pureFunction0(1, _c27));
  }
}
function CalendarWeekViewComponent_For_8_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29, 3);
    \u0275\u0275listener("resizeStart", function CalendarWeekViewComponent_For_8_For_4_Template_div_resizeStart_0_listener($event) {
      const timeEvent_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      const dayColumns_r16 = \u0275\u0275reference(6);
      return \u0275\u0275resetView(ctx_r2.timeEventResizeStarted(dayColumns_r16, timeEvent_r15, $event));
    })("resizing", function CalendarWeekViewComponent_For_8_For_4_Template_div_resizing_0_listener($event) {
      const timeEvent_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.timeEventResizing(timeEvent_r15, $event));
    })("resizeEnd", function CalendarWeekViewComponent_For_8_For_4_Template_div_resizeEnd_0_listener() {
      const timeEvent_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.timeEventResizeEnded(timeEvent_r15));
    })("dragStart", function CalendarWeekViewComponent_For_8_For_4_Template_div_dragStart_0_listener() {
      const timeEvent_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const event_r17 = \u0275\u0275reference(1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      const dayColumns_r16 = \u0275\u0275reference(6);
      return \u0275\u0275resetView(ctx_r2.dragStarted(dayColumns_r16, event_r17, timeEvent_r15, true));
    })("dragging", function CalendarWeekViewComponent_For_8_For_4_Template_div_dragging_0_listener($event) {
      const timeEvent_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.dragMove(timeEvent_r15, $event));
    })("dragEnd", function CalendarWeekViewComponent_For_8_For_4_Template_div_dragEnd_0_listener($event) {
      const timeEvent_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.dragEnded(timeEvent_r15, $event, ctx_r2.dayColumnWidth, true));
    });
    \u0275\u0275conditionalCreate(2, CalendarWeekViewComponent_For_8_For_4_Conditional_2_Template, 1, 2, "div", 19);
    \u0275\u0275template(3, CalendarWeekViewComponent_For_8_For_4_ng_template_3_Template, 0, 0, "ng-template", 30)(4, CalendarWeekViewComponent_For_8_For_4_ng_template_4_Template, 1, 12, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275conditionalCreate(6, CalendarWeekViewComponent_For_8_For_4_Conditional_6_Template, 1, 2, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const timeEvent_r15 = ctx.$implicit;
    const weekEventTemplate_r20 = \u0275\u0275reference(5);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("top", timeEvent_r15.top, "px")("height", timeEvent_r15.height, "px")("left", timeEvent_r15.left, "%")("width", timeEvent_r15.width, "%");
    \u0275\u0275classProp("cal-draggable", timeEvent_r15.event.draggable && ctx_r2.timeEventResizes.size === 0)("cal-starts-within-day", !timeEvent_r15.startsBeforeDay)("cal-ends-within-day", !timeEvent_r15.endsAfterDay);
    \u0275\u0275property("ngClass", timeEvent_r15.event.cssClass)("hidden", timeEvent_r15.height === 0 && timeEvent_r15.width === 0)("resizeCursors", ctx_r2.resizeCursors)("resizeSnapGrid", \u0275\u0275pureFunction4(30, _c25, ctx_r2.dayColumnWidth, ctx_r2.dayColumnWidth, ctx_r2.eventSnapSize || ctx_r2.hourSegmentHeight, ctx_r2.eventSnapSize || ctx_r2.hourSegmentHeight))("validateResize", ctx_r2.validateResize)("allowNegativeResizes", true)("dropData", \u0275\u0275pureFunction2(35, _c21, timeEvent_r15.event, ctx_r2.calendarId))("dragAxis", \u0275\u0275pureFunction2(38, _c10, timeEvent_r15.event.draggable && ctx_r2.timeEventResizes.size === 0, timeEvent_r15.event.draggable && ctx_r2.timeEventResizes.size === 0))("dragSnapGrid", ctx_r2.snapDraggedEvents ? \u0275\u0275pureFunction2(41, _c10, ctx_r2.dayColumnWidth, ctx_r2.eventSnapSize || ctx_r2.hourSegmentHeight) : \u0275\u0275pureFunction0(44, _c3))("touchStartLongPress", \u0275\u0275pureFunction0(45, _c11))("ghostDragEnabled", !ctx_r2.snapDraggedEvents)("ghostElementTemplate", weekEventTemplate_r20)("validateDrag", ctx_r2.validateDrag);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((timeEvent_r15.event == null ? null : timeEvent_r15.event.resizable == null ? null : timeEvent_r15.event.resizable.beforeStart) && !timeEvent_r15.startsBeforeDay ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", weekEventTemplate_r20);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((timeEvent_r15.event == null ? null : timeEvent_r15.event.resizable == null ? null : timeEvent_r15.event.resizable.afterEnd) && !timeEvent_r15.endsAfterDay ? 6 : -1);
  }
}
function CalendarWeekViewComponent_For_8_For_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mwl-calendar-week-view-hour-segment", 33);
    \u0275\u0275listener("mwlClick", function CalendarWeekViewComponent_For_8_For_6_For_2_Template_mwl_calendar_week_view_hour_segment_mwlClick_0_listener($event) {
      const segment_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.hourSegmentClicked.emit({
        date: segment_r22.date,
        sourceEvent: $event
      }));
    })("drop", function CalendarWeekViewComponent_For_8_For_6_For_2_Template_mwl_calendar_week_view_hour_segment_drop_0_listener($event) {
      const segment_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.eventDropped($event, segment_r22.date, false));
    })("dragEnter", function CalendarWeekViewComponent_For_8_For_6_For_2_Template_mwl_calendar_week_view_hour_segment_dragEnter_0_listener() {
      const segment_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.dateDragEnter(segment_r22.date));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const segment_r22 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("height", ctx_r2.hourSegmentHeight, "px");
    \u0275\u0275property("segment", segment_r22)("segmentHeight", ctx_r2.hourSegmentHeight)("locale", ctx_r2.locale)("customTemplate", ctx_r2.hourSegmentTemplate)("daysInWeek", ctx_r2.daysInWeek)("clickListenerDisabled", !ctx_r2.hourSegmentClicked.observed)("dragOverClass", !ctx_r2.dragActive || !ctx_r2.snapDraggedEvents ? "cal-drag-over" : null)("isTimeLabel", ctx_r2.daysInWeek === 1);
  }
}
function CalendarWeekViewComponent_For_8_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275repeaterCreate(1, CalendarWeekViewComponent_For_8_For_6_For_2_Template, 1, 10, "mwl-calendar-week-view-hour-segment", 32, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const hour_r23 = ctx.$implicit;
    const \u0275$index_68_r24 = ctx.$index;
    \u0275\u0275classProp("cal-hour-odd", \u0275$index_68_r24 % 2 !== 0);
    \u0275\u0275advance();
    \u0275\u0275repeater(hour_r23.segments);
  }
}
function CalendarWeekViewComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "mwl-calendar-week-view-current-time-marker", 26);
    \u0275\u0275elementStart(2, "div", 27);
    \u0275\u0275repeaterCreate(3, CalendarWeekViewComponent_For_8_For_4_Template, 7, 46, "div", 28, _forTrack4);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, CalendarWeekViewComponent_For_8_For_6_Template, 3, 2, "div", 22, _forTrack5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r19 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("columnDate", column_r19.date)("dayStartHour", ctx_r2.dayStartHour)("dayStartMinute", ctx_r2.dayStartMinute)("dayEndHour", ctx_r2.dayEndHour)("dayEndMinute", ctx_r2.dayEndMinute)("hourSegments", ctx_r2.hourSegments)("hourDuration", ctx_r2.hourDuration)("hourSegmentHeight", ctx_r2.hourSegmentHeight)("customTemplate", ctx_r2.currentTimeMarkerTemplate);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(column_r19.events);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(column_r19.hours);
  }
}
function isInsideLeftAndRight(outer, inner) {
  return Math.floor(outer.left) <= Math.ceil(inner.left) && Math.floor(inner.left) <= Math.ceil(outer.right) && Math.floor(outer.left) <= Math.ceil(inner.right) && Math.floor(inner.right) <= Math.ceil(outer.right);
}
function isInsideTopAndBottom(outer, inner) {
  return Math.floor(outer.top) <= Math.ceil(inner.top) && Math.floor(inner.top) <= Math.ceil(outer.bottom) && Math.floor(outer.top) <= Math.ceil(inner.bottom) && Math.floor(inner.bottom) <= Math.ceil(outer.bottom);
}
function isInside(outer, inner) {
  return isInsideLeftAndRight(outer, inner) && isInsideTopAndBottom(outer, inner);
}
function roundToNearest(amount, precision) {
  return Math.round(amount / precision) * precision;
}
function getPixelAmountInMinutes(hourSegments, hourSegmentHeight, hourDuration) {
  return (hourDuration || MINUTES_IN_HOUR2) / (hourSegments * hourSegmentHeight);
}
function getMinutesMoved(movedY, hourSegments, hourSegmentHeight, eventSnapSize, hourDuration) {
  const draggedInPixelsSnapSize = roundToNearest(movedY, eventSnapSize || hourSegmentHeight);
  const pixelAmountInMinutes = getPixelAmountInMinutes(hourSegments, hourSegmentHeight, hourDuration);
  return draggedInPixelsSnapSize * pixelAmountInMinutes;
}
function getDefaultEventEnd(dateAdapter, event, minimumMinutes) {
  if (event.end) {
    return event.end;
  } else {
    return dateAdapter.addMinutes(event.start, minimumMinutes);
  }
}
function addDaysWithExclusions(dateAdapter, date, days, excluded) {
  let daysCounter = 0;
  let daysToAdd = 0;
  const changeDays = days < 0 ? dateAdapter.subDays : dateAdapter.addDays;
  let result = date;
  while (daysToAdd <= Math.abs(days)) {
    result = changeDays(date, daysCounter);
    const day = dateAdapter.getDay(result);
    if (excluded.indexOf(day) === -1) {
      daysToAdd++;
    }
    daysCounter++;
  }
  return result;
}
function isDraggedWithinPeriod(newStart, newEnd, period) {
  const end = newEnd || newStart;
  return period.start <= newStart && newStart <= period.end || period.start <= end && end <= period.end;
}
function shouldFireDroppedEvent(dropEvent, date, allDay, calendarId) {
  return dropEvent.dropData && dropEvent.dropData.event && (dropEvent.dropData.calendarId !== calendarId || dropEvent.dropData.event.allDay && !allDay || !dropEvent.dropData.event.allDay && allDay);
}
function getWeekViewPeriod(dateAdapter, viewDate, weekStartsOn, excluded = [], daysInWeek) {
  let viewStart = daysInWeek ? dateAdapter.startOfDay(viewDate) : dateAdapter.startOfWeek(viewDate, {
    weekStartsOn
  });
  const endOfWeek2 = dateAdapter.endOfWeek(viewDate, {
    weekStartsOn
  });
  while (excluded.indexOf(dateAdapter.getDay(viewStart)) > -1 && viewStart < endOfWeek2) {
    viewStart = dateAdapter.addDays(viewStart, 1);
  }
  if (daysInWeek) {
    const viewEnd = dateAdapter.endOfDay(addDaysWithExclusions(dateAdapter, viewStart, daysInWeek - 1, excluded));
    return {
      viewStart,
      viewEnd
    };
  } else {
    let viewEnd = endOfWeek2;
    while (excluded.indexOf(dateAdapter.getDay(viewEnd)) > -1 && viewEnd > viewStart) {
      viewEnd = dateAdapter.subDays(viewEnd, 1);
    }
    return {
      viewStart,
      viewEnd
    };
  }
}
function isWithinThreshold({
  x,
  y
}) {
  const DRAG_THRESHOLD = 1;
  return Math.abs(x) > DRAG_THRESHOLD || Math.abs(y) > DRAG_THRESHOLD;
}
var _c0, _c1, _forTrack0, _c2, _c3, _c4, _c5, _forTrack1, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _forTrack2, _forTrack3, _forTrack4, _forTrack5, ClickDirective, KeydownEnterDirective, CalendarA11y, CalendarA11yPipe, CalendarEventActionsComponent, CalendarEventTitleFormatter, CalendarEventTitlePipe, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, DateAdapter, CalendarView, validateEvents2, MINUTES_IN_HOUR2, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarAngularDateFormatter, CalendarDateFormatter, CalendarDatePipe, CalendarUtils, MOMENT, CalendarMomentDateFormatter, CalendarNativeDateFormatter, CalendarEventTimesChangedEventType, CalendarCommonModule, CalendarMonthViewHeaderComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewComponent, CalendarMonthModule, CalendarDragHelper, CalendarResizeHelper, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent, CalendarWeekViewComponent, CalendarWeekModule, CalendarDayViewComponent, CalendarDayModule, CalendarModule;
var init_angular_calendar = __esm({
  "node_modules/angular-calendar/fesm2022/angular-calendar.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_common();
    init_esm();
    init_operators();
    init_entry();
    init_calendar_utils();
    init_calendar_utils();
    init_angular_draggable_droppable();
    init_angular_resizable_element();
    _c0 = (a0) => ({
      event: a0
    });
    _c1 = (a0) => ({
      action: a0
    });
    _forTrack0 = ($index, $item) => $item.id ?? $item;
    _c2 = (a0, a1) => ({
      event: a0,
      view: a1
    });
    _c3 = () => ({});
    _c4 = (a0, a1, a2) => ({
      contents: a0,
      placement: a1,
      event: a2
    });
    _c5 = (a0, a1) => ({
      days: a0,
      locale: a1
    });
    _forTrack1 = ($index, $item) => $item.date.toISOString();
    _c6 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) => ({
      day: a0,
      openDay: a1,
      locale: a2,
      tooltipPlacement: a3,
      highlightDay: a4,
      unhighlightDay: a5,
      eventClicked: a6,
      tooltipTemplate: a7,
      tooltipAppendToBody: a8,
      tooltipDelay: a9,
      validateDrag: a10
    });
    _c7 = (a0, a1) => ({
      day: a0,
      locale: a1
    });
    _c8 = (a0) => ({
      backgroundColor: a0
    });
    _c9 = (a0, a1) => ({
      event: a0,
      draggedFrom: a1
    });
    _c10 = (a0, a1) => ({
      x: a0,
      y: a1
    });
    _c11 = () => ({
      delay: 300,
      delta: 30
    });
    _c12 = (a0, a1, a2, a3) => ({
      events: a0,
      eventClicked: a1,
      isOpen: a2,
      validateDrag: a3
    });
    _c13 = (a0, a1) => ({
      date: a0,
      locale: a1
    });
    _c14 = (a0, a1) => ({
      event: a0,
      locale: a1
    });
    _c15 = (a0, a1, a2, a3, a4) => ({
      days: a0,
      locale: a1,
      dayHeaderClicked: a2,
      eventDropped: a3,
      dragEnter: a4
    });
    _c16 = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => ({
      weekEvent: a0,
      tooltipPlacement: a1,
      eventClicked: a2,
      tooltipTemplate: a3,
      tooltipAppendToBody: a4,
      tooltipDisabled: a5,
      tooltipDelay: a6,
      column: a7,
      daysInWeek: a8
    });
    _c17 = (a0, a1, a2) => ({
      color: a0,
      backgroundColor: a1,
      borderColor: a2
    });
    _c18 = (a0, a1, a2, a3, a4) => ({
      segment: a0,
      locale: a1,
      segmentHeight: a2,
      isTimeLabel: a3,
      daysInWeek: a4
    });
    _c19 = (a0, a1, a2, a3, a4, a5, a6) => ({
      columnDate: a0,
      dayStartHour: a1,
      dayStartMinute: a2,
      dayEndHour: a3,
      dayEndMinute: a4,
      isVisible: a5,
      topPx: a6
    });
    _c20 = (a0, a1) => ({
      left: a0,
      right: a1
    });
    _c21 = (a0, a1) => ({
      event: a0,
      calendarId: a1
    });
    _c22 = (a0) => ({
      x: a0
    });
    _c23 = () => ({
      left: true
    });
    _c24 = () => ({
      right: true
    });
    _c25 = (a0, a1, a2, a3) => ({
      left: a0,
      right: a1,
      top: a2,
      bottom: a3
    });
    _c26 = () => ({
      left: true,
      top: true
    });
    _c27 = () => ({
      right: true,
      bottom: true
    });
    _forTrack2 = ($index, $item) => $item.hours[0] ? $item.hours[0].segments[0].date.toISOString() : $item;
    _forTrack3 = ($index, $item) => $item.id;
    _forTrack4 = ($index, $item) => $item.event.id ?? $item.event;
    _forTrack5 = ($index, $item) => $item.segments[0].date.toISOString();
    ClickDirective = class _ClickDirective {
      constructor() {
        this.clickListenerDisabled = false;
        this.click = new EventEmitter();
        this.destroy$ = new Subject();
        this.renderer = inject(Renderer2);
        this.elm = inject(ElementRef);
      }
      ngOnInit() {
        if (!this.clickListenerDisabled) {
          this.listen().pipe(takeUntil(this.destroy$)).subscribe((event) => {
            event.stopPropagation();
            this.click.emit(event);
          });
        }
      }
      ngOnDestroy() {
        this.destroy$.next();
      }
      listen() {
        return new Observable((observer) => {
          return this.renderer.listen(this.elm.nativeElement, "click", (event) => {
            observer.next(event);
          });
        });
      }
      static {
        this.\u0275fac = function ClickDirective_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _ClickDirective)();
        };
      }
      static {
        this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
          type: _ClickDirective,
          selectors: [["", "mwlClick", ""]],
          inputs: {
            clickListenerDisabled: "clickListenerDisabled"
          },
          outputs: {
            click: "mwlClick"
          }
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClickDirective, [{
        type: Directive,
        args: [{
          selector: "[mwlClick]"
        }]
      }], null, {
        clickListenerDisabled: [{
          type: Input
        }],
        click: [{
          type: Output,
          args: ["mwlClick"]
        }]
      });
    })();
    KeydownEnterDirective = class _KeydownEnterDirective {
      constructor() {
        this.keydown = new EventEmitter();
        this.keydownListener = null;
        this.host = inject(ElementRef);
        this.ngZone = inject(NgZone);
        this.renderer = inject(Renderer2);
      }
      ngOnInit() {
        this.ngZone.runOutsideAngular(() => {
          this.keydownListener = this.renderer.listen(this.host.nativeElement, "keydown", (event) => {
            if (event.keyCode === 13 || event.which === 13 || event.key === "Enter") {
              event.preventDefault();
              event.stopPropagation();
              this.ngZone.run(() => {
                this.keydown.emit(event);
              });
            }
          });
        });
      }
      ngOnDestroy() {
        if (this.keydownListener !== null) {
          this.keydownListener();
          this.keydownListener = null;
        }
      }
      static {
        this.\u0275fac = function KeydownEnterDirective_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _KeydownEnterDirective)();
        };
      }
      static {
        this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
          type: _KeydownEnterDirective,
          selectors: [["", "mwlKeydownEnter", ""]],
          outputs: {
            keydown: "mwlKeydownEnter"
          }
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KeydownEnterDirective, [{
        type: Directive,
        args: [{
          selector: "[mwlKeydownEnter]"
        }]
      }], null, {
        keydown: [{
          type: Output,
          args: ["mwlKeydownEnter"]
        }]
      });
    })();
    CalendarA11y = class _CalendarA11y {
      /**
       * Aria label for the badges/date of a cell
       * @example: `Saturday October 19 1 event click to expand`
       */
      monthCell({
        day,
        locale
      }) {
        if (day.badgeTotal > 0) {
          return `
        ${formatDate(day.date, "EEEE MMMM d", locale)},
        ${this.pluralizeEvents(day.badgeTotal, locale)},
         click to expand
      `;
        } else {
          return `${formatDate(day.date, "EEEE MMMM d", locale)}`;
        }
      }
      /**
       * Helper method to pluralize event count using native Intl.PluralRules API
       */
      pluralizeEvents(count2, locale) {
        const pluralRules = new Intl.PluralRules(locale);
        const rule = pluralRules.select(count2);
        const mapping = {
          zero: "no events",
          one: "1 event",
          other: `${count2} events`
        };
        return mapping[rule] ?? mapping.other;
      }
      /**
       * Aria label for the open day events start landmark
       * @example: `Saturday October 19 expanded view`
       */
      openDayEventsLandmark({
        date,
        locale
      }) {
        return `
      Beginning of expanded view for ${formatDate(date, "EEEE MMMM dd", locale)}
    `;
      }
      /**
       * Aria label for alert that a day in the month view was expanded
       * @example: `Saturday October 19 expanded`
       */
      openDayEventsAlert({
        date,
        locale
      }) {
        return `${formatDate(date, "EEEE MMMM dd", locale)} expanded`;
      }
      /**
       * Descriptive aria label for an event
       * @example: `Saturday October 19th, Scott's Pizza Party, from 11:00am to 5:00pm`
       */
      eventDescription({
        event,
        locale
      }) {
        if (event.allDay === true) {
          return this.allDayEventDescription({
            event,
            locale
          });
        }
        const aria = `
      ${formatDate(event.start, "EEEE MMMM dd", locale)},
      ${event.title}, from ${formatDate(event.start, "hh:mm a", locale)}
    `;
        if (event.end) {
          return aria + ` to ${formatDate(event.end, "hh:mm a", locale)}`;
        }
        return aria;
      }
      /**
       * Descriptive aria label for an all day event
       * @example:
       * `Scott's Party, event spans multiple days: start time October 19 5:00pm, no stop time`
       */
      allDayEventDescription({
        event,
        locale
      }) {
        const aria = `
      ${event.title}, event spans multiple days:
      start time ${formatDate(event.start, "MMMM dd hh:mm a", locale)}
    `;
        if (event.end) {
          return aria + `, stop time ${formatDate(event.end, "MMMM d hh:mm a", locale)}`;
        }
        return aria + `, no stop time`;
      }
      /**
       * Aria label for the calendar event actions icons
       * @returns 'Edit' for fa-pencil icons, and 'Delete' for fa-times icons
       */
      actionButtonLabel({
        action
      }) {
        return action.a11yLabel;
      }
      /**
       * @returns {number} Tab index to be given to month cells
       */
      monthCellTabIndex() {
        return 0;
      }
      /**
       * @returns true if the events inside the month cell should be aria-hidden
       */
      hideMonthCellEvents() {
        return true;
      }
      /**
       * @returns true if event titles should be aria-hidden (global)
       */
      hideEventTitle() {
        return true;
      }
      /**
       * @returns true if hour segments in the week view should be aria-hidden
       */
      hideWeekHourSegment() {
        return true;
      }
      /**
       * @returns true if hour segments in the day view should be aria-hidden
       */
      hideDayHourSegment() {
        return true;
      }
      static {
        this.\u0275fac = function CalendarA11y_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _CalendarA11y)();
        };
      }
      static {
        this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
          token: _CalendarA11y,
          factory: _CalendarA11y.\u0275fac
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarA11y, [{
        type: Injectable
      }], null, null);
    })();
    CalendarA11yPipe = class _CalendarA11yPipe {
      constructor() {
        this.calendarA11y = inject(CalendarA11y);
        this.locale = inject(LOCALE_ID);
      }
      transform(a11yParams, method) {
        a11yParams.locale = a11yParams.locale || this.locale;
        if (typeof this.calendarA11y[method] === "undefined") {
          const allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(CalendarA11y.prototype)).filter((iMethod) => iMethod !== "constructor");
          throw new Error(`${method} is not a valid a11y method. Can only be one of ${allowedMethods.join(", ")}`);
        }
        return this.calendarA11y[method](a11yParams);
      }
      static {
        this.\u0275fac = function CalendarA11yPipe_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _CalendarA11yPipe)();
        };
      }
      static {
        this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
          name: "calendarA11y",
          type: _CalendarA11yPipe,
          pure: true
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarA11yPipe, [{
        type: Pipe,
        args: [{
          name: "calendarA11y"
        }]
      }], null, null);
    })();
    CalendarEventActionsComponent = class _CalendarEventActionsComponent {
      static {
        this.\u0275fac = function CalendarEventActionsComponent_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _CalendarEventActionsComponent)();
        };
      }
      static {
        this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
          type: _CalendarEventActionsComponent,
          selectors: [["mwl-calendar-event-actions"]],
          inputs: {
            event: "event",
            customTemplate: "customTemplate"
          },
          decls: 3,
          vars: 4,
          consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-event-actions"], ["href", "javascript:;", "tabindex", "0", "role", "button", 1, "cal-event-action", 3, "ngClass", "innerHtml"], ["href", "javascript:;", "tabindex", "0", "role", "button", 1, "cal-event-action", 3, "mwlClick", "mwlKeydownEnter", "ngClass", "innerHtml"]],
          template: function CalendarEventActionsComponent_Template(rf, ctx) {
            if (rf & 1) {
              \u0275\u0275template(0, CalendarEventActionsComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(2, CalendarEventActionsComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
            }
            if (rf & 2) {
              const defaultTemplate_r4 = \u0275\u0275reference(1);
              \u0275\u0275advance(2);
              \u0275\u0275property("ngTemplateOutlet", ctx.customTemplate || defaultTemplate_r4)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, ctx.event));
            }
          },
          dependencies: [NgClass, ClickDirective, KeydownEnterDirective, NgTemplateOutlet, CalendarA11yPipe],
          encapsulation: 2
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarEventActionsComponent, [{
        type: Component,
        args: [{
          selector: "mwl-calendar-event-actions",
          template: `
    <ng-template #defaultTemplate let-event="event">
      @if (event.actions) {
        <span class="cal-event-actions">
          @for (action of event.actions; track action.id ?? action) {
            <a
              class="cal-event-action"
              href="javascript:;"
              (mwlClick)="action.onClick({ event: event, sourceEvent: $event })"
              (mwlKeydownEnter)="
                action.onClick({ event: event, sourceEvent: $event })
              "
              [ngClass]="action.cssClass"
              [innerHtml]="action.label"
              tabindex="0"
              role="button"
              [attr.aria-label]="
                { action: action } | calendarA11y: 'actionButtonLabel'
              "
            >
            </a>
          }
        </span>
      }
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        event: event,
      }"
    />
  `,
          imports: [NgClass, ClickDirective, KeydownEnterDirective, NgTemplateOutlet, CalendarA11yPipe]
        }]
      }], null, {
        event: [{
          type: Input
        }],
        customTemplate: [{
          type: Input
        }]
      });
    })();
    CalendarEventTitleFormatter = class {
      /**
       * The month view event title.
       */
      month(event, title) {
        return event.title;
      }
      /**
       * The month view event tooltip. Return a falsey value from this to disable the tooltip.
       */
      monthTooltip(event, title) {
        return event.title;
      }
      /**
       * The week view event title.
       */
      week(event, title) {
        return event.title;
      }
      /**
       * The week view event tooltip. Return a falsey value from this to disable the tooltip.
       */
      weekTooltip(event, title) {
        return event.title;
      }
      /**
       * The day view event title.
       */
      day(event, title) {
        return event.title;
      }
      /**
       * The day view event tooltip. Return a falsey value from this to disable the tooltip.
       */
      dayTooltip(event, title) {
        return event.title;
      }
    };
    CalendarEventTitlePipe = class _CalendarEventTitlePipe {
      constructor() {
        this.calendarEventTitle = inject(CalendarEventTitleFormatter);
      }
      transform(title, titleType, event) {
        return this.calendarEventTitle[titleType](event, title);
      }
      static {
        this.\u0275fac = function CalendarEventTitlePipe_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _CalendarEventTitlePipe)();
        };
      }
      static {
        this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
          name: "calendarEventTitle",
          type: _CalendarEventTitlePipe,
          pure: true
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarEventTitlePipe, [{
        type: Pipe,
        args: [{
          name: "calendarEventTitle"
        }]
      }], null, null);
    })();
    CalendarEventTitleComponent = class _CalendarEventTitleComponent {
      static {
        this.\u0275fac = function CalendarEventTitleComponent_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _CalendarEventTitleComponent)();
        };
      }
      static {
        this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
          type: _CalendarEventTitleComponent,
          selectors: [["mwl-calendar-event-title"]],
          inputs: {
            event: "event",
            customTemplate: "customTemplate",
            view: "view"
          },
          decls: 3,
          vars: 5,
          consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-event-title", 3, "innerHTML"]],
          template: function CalendarEventTitleComponent_Template(rf, ctx) {
            if (rf & 1) {
              \u0275\u0275template(0, CalendarEventTitleComponent_ng_template_0_Template, 3, 10, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(2, CalendarEventTitleComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
            }
            if (rf & 2) {
              const defaultTemplate_r3 = \u0275\u0275reference(1);
              \u0275\u0275advance(2);
              \u0275\u0275property("ngTemplateOutlet", ctx.customTemplate || defaultTemplate_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c2, ctx.event, ctx.view));
            }
          },
          dependencies: [NgTemplateOutlet, CalendarEventTitlePipe, CalendarA11yPipe],
          encapsulation: 2
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarEventTitleComponent, [{
        type: Component,
        args: [{
          selector: "mwl-calendar-event-title",
          template: `
    <ng-template #defaultTemplate let-event="event" let-view="view">
      <span
        class="cal-event-title"
        [innerHTML]="event.title | calendarEventTitle: view : event"
        [attr.aria-hidden]="{} | calendarA11y: 'hideEventTitle'"
      >
      </span>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        event: event,
        view: view,
      }"
    />
  `,
          imports: [NgTemplateOutlet, CalendarEventTitlePipe, CalendarA11yPipe]
        }]
      }], null, {
        event: [{
          type: Input
        }],
        customTemplate: [{
          type: Input
        }],
        view: [{
          type: Input
        }]
      });
    })();
    CalendarTooltipWindowComponent = class _CalendarTooltipWindowComponent {
      static {
        this.\u0275fac = function CalendarTooltipWindowComponent_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _CalendarTooltipWindowComponent)();
        };
      }
      static {
        this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
          type: _CalendarTooltipWindowComponent,
          selectors: [["mwl-calendar-tooltip-window"]],
          inputs: {
            contents: "contents",
            placement: "placement",
            event: "event",
            customTemplate: "customTemplate"
          },
          decls: 3,
          vars: 6,
          consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-tooltip", 3, "ngClass"], [1, "cal-tooltip-arrow"], [1, "cal-tooltip-inner", 3, "innerHtml"]],
          template: function CalendarTooltipWindowComponent_Template(rf, ctx) {
            if (rf & 1) {
              \u0275\u0275template(0, CalendarTooltipWindowComponent_ng_template_0_Template, 3, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(2, CalendarTooltipWindowComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
            }
            if (rf & 2) {
              const defaultTemplate_r3 = \u0275\u0275reference(1);
              \u0275\u0275advance(2);
              \u0275\u0275property("ngTemplateOutlet", ctx.customTemplate || defaultTemplate_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction3(2, _c4, ctx.contents, ctx.placement, ctx.event));
            }
          },
          dependencies: [NgClass, NgTemplateOutlet],
          encapsulation: 2
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarTooltipWindowComponent, [{
        type: Component,
        args: [{
          selector: "mwl-calendar-tooltip-window",
          template: `
    <ng-template
      #defaultTemplate
      let-contents="contents"
      let-placement="placement"
      let-event="event"
    >
      <div class="cal-tooltip" [ngClass]="'cal-tooltip-' + placement">
        <div class="cal-tooltip-arrow"></div>
        <div class="cal-tooltip-inner" [innerHtml]="contents"></div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        contents: contents,
        placement: placement,
        event: event,
      }"
    />
  `,
          imports: [NgClass, NgTemplateOutlet]
        }]
      }], null, {
        contents: [{
          type: Input
        }],
        placement: [{
          type: Input
        }],
        event: [{
          type: Input
        }],
        customTemplate: [{
          type: Input
        }]
      });
    })();
    CalendarTooltipDirective = class _CalendarTooltipDirective {
      constructor() {
        this.placement = "auto";
        this.delay = null;
        this.elementRef = inject(ElementRef);
        this.injector = inject(Injector);
        this.viewContainerRef = inject(ViewContainerRef);
        this.document = inject(DOCUMENT);
        this.cancelTooltipDelay$ = new Subject();
      }
      ngOnChanges(changes) {
        if (this.tooltipRef && (changes.contents || changes.customTemplate || changes.event)) {
          this.tooltipRef.instance.contents = this.contents;
          this.tooltipRef.instance.customTemplate = this.customTemplate;
          this.tooltipRef.instance.event = this.event;
          this.tooltipRef.changeDetectorRef.markForCheck();
          if (!this.contents) {
            this.hide();
          }
        }
      }
      ngOnDestroy() {
        this.hide();
      }
      onMouseOver() {
        const delay$ = this.delay === null ? of("now") : timer(this.delay);
        delay$.pipe(takeUntil(this.cancelTooltipDelay$)).subscribe(() => {
          this.show();
        });
      }
      onMouseOut() {
        this.hide();
      }
      show() {
        if (!this.tooltipRef && this.contents) {
          this.tooltipRef = this.viewContainerRef.createComponent(CalendarTooltipWindowComponent, {
            index: 0,
            injector: this.injector,
            projectableNodes: []
          });
          this.tooltipRef.instance.contents = this.contents;
          this.tooltipRef.instance.customTemplate = this.customTemplate;
          this.tooltipRef.instance.event = this.event;
          if (this.appendToBody) {
            this.document.body.appendChild(this.tooltipRef.location.nativeElement);
          }
          requestAnimationFrame(() => {
            this.positionTooltip();
          });
        }
      }
      hide() {
        if (this.tooltipRef) {
          this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.tooltipRef.hostView));
          this.tooltipRef = null;
        }
        this.cancelTooltipDelay$.next();
      }
      positionTooltip(previousPositions = []) {
        if (this.tooltipRef) {
          this.tooltipRef.changeDetectorRef.detectChanges();
          this.tooltipRef.instance.placement = positionElements(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement.children[0], this.placement, this.appendToBody);
          if (previousPositions.indexOf(this.tooltipRef.instance.placement) === -1) {
            this.positionTooltip([...previousPositions, this.tooltipRef.instance.placement]);
          }
        }
      }
      static {
        this.\u0275fac = function CalendarTooltipDirective_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _CalendarTooltipDirective)();
        };
      }
      static {
        this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
          type: _CalendarTooltipDirective,
          selectors: [["", "mwlCalendarTooltip", ""]],
          hostBindings: function CalendarTooltipDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
              \u0275\u0275listener("mouseenter", function CalendarTooltipDirective_mouseenter_HostBindingHandler() {
                return ctx.onMouseOver();
              })("mouseleave", function CalendarTooltipDirective_mouseleave_HostBindingHandler() {
                return ctx.onMouseOut();
              });
            }
          },
          inputs: {
            contents: [0, "mwlCalendarTooltip", "contents"],
            placement: [0, "tooltipPlacement", "placement"],
            customTemplate: [0, "tooltipTemplate", "customTemplate"],
            event: [0, "tooltipEvent", "event"],
            appendToBody: [0, "tooltipAppendToBody", "appendToBody"],
            delay: [0, "tooltipDelay", "delay"]
          },
          features: [\u0275\u0275NgOnChangesFeature]
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarTooltipDirective, [{
        type: Directive,
        args: [{
          selector: "[mwlCalendarTooltip]"
        }]
      }], null, {
        contents: [{
          type: Input,
          args: ["mwlCalendarTooltip"]
        }],
        placement: [{
          type: Input,
          args: ["tooltipPlacement"]
        }],
        customTemplate: [{
          type: Input,
          args: ["tooltipTemplate"]
        }],
        event: [{
          type: Input,
          args: ["tooltipEvent"]
        }],
        appendToBody: [{
          type: Input,
          args: ["tooltipAppendToBody"]
        }],
        delay: [{
          type: Input,
          args: ["tooltipDelay"]
        }],
        onMouseOver: [{
          type: HostListener,
          args: ["mouseenter"]
        }],
        onMouseOut: [{
          type: HostListener,
          args: ["mouseleave"]
        }]
      });
    })();
    DateAdapter = class {
    };
    (function(CalendarView2) {
      CalendarView2["Month"] = "month";
      CalendarView2["Week"] = "week";
      CalendarView2["Day"] = "day";
    })(CalendarView || (CalendarView = {}));
    validateEvents2 = (events) => {
      const warn = (...args) => console.warn("angular-calendar", ...args);
      return validateEvents(events, warn);
    };
    MINUTES_IN_HOUR2 = 60;
    CalendarPreviousViewDirective = class _CalendarPreviousViewDirective {
      constructor() {
        this.excludeDays = [];
        this.viewDateChange = new EventEmitter();
        this.dateAdapter = inject(DateAdapter);
      }
      /**
       * @hidden
       */
      onClick() {
        const subFn = {
          day: this.dateAdapter.subDays,
          week: this.dateAdapter.subWeeks,
          month: this.dateAdapter.subMonths
        }[this.view];
        if (this.view === CalendarView.Day) {
          this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -1, this.excludeDays));
        } else if (this.view === CalendarView.Week && this.daysInWeek) {
          this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -this.daysInWeek, this.excludeDays));
        } else {
          this.viewDateChange.emit(subFn(this.viewDate, 1));
        }
      }
      static {
        this.\u0275fac = function CalendarPreviousViewDirective_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _CalendarPreviousViewDirective)();
        };
      }
      static {
        this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
          type: _CalendarPreviousViewDirective,
          selectors: [["", "mwlCalendarPreviousView", ""]],
          hostBindings: function CalendarPreviousViewDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
              \u0275\u0275listener("click", function CalendarPreviousViewDirective_click_HostBindingHandler() {
                return ctx.onClick();
              });
            }
          },
          inputs: {
            view: "view",
            viewDate: "viewDate",
            excludeDays: "excludeDays",
            daysInWeek: "daysInWeek"
          },
          outputs: {
            viewDateChange: "viewDateChange"
          }
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarPreviousViewDirective, [{
        type: Directive,
        args: [{
          selector: "[mwlCalendarPreviousView]"
        }]
      }], null, {
        view: [{
          type: Input
        }],
        viewDate: [{
          type: Input
        }],
        excludeDays: [{
          type: Input
        }],
        daysInWeek: [{
          type: Input
        }],
        viewDateChange: [{
          type: Output
        }],
        onClick: [{
          type: HostListener,
          args: ["click"]
        }]
      });
    })();
    CalendarNextViewDirective = class _CalendarNextViewDirective {
      constructor() {
        this.excludeDays = [];
        this.viewDateChange = new EventEmitter();
        this.dateAdapter = inject(DateAdapter);
      }
      /**
       * @hidden
       */
      onClick() {
        const addFn = {
          day: this.dateAdapter.addDays,
          week: this.dateAdapter.addWeeks,
          month: this.dateAdapter.addMonths
        }[this.view];
        if (this.view === CalendarView.Day) {
          this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, 1, this.excludeDays));
        } else if (this.view === CalendarView.Week && this.daysInWeek) {
          this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, this.daysInWeek, this.excludeDays));
        } else {
          this.viewDateChange.emit(addFn(this.viewDate, 1));
        }
      }
      static {
        this.\u0275fac = function CalendarNextViewDirective_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _CalendarNextViewDirective)();
        };
      }
      static {
        this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
          type: _CalendarNextViewDirective,
          selectors: [["", "mwlCalendarNextView", ""]],
          hostBindings: function CalendarNextViewDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
              \u0275\u0275listener("click", function CalendarNextViewDirective_click_HostBindingHandler() {
                return ctx.onClick();
              });
            }
          },
          inputs: {
            view: "view",
            viewDate: "viewDate",
            excludeDays: "excludeDays",
            daysInWeek: "daysInWeek"
          },
          outputs: {
            viewDateChange: "viewDateChange"
          }
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarNextViewDirective, [{
        type: Directive,
        args: [{
          selector: "[mwlCalendarNextView]"
        }]
      }], null, {
        view: [{
          type: Input
        }],
        viewDate: [{
          type: Input
        }],
        excludeDays: [{
          type: Input
        }],
        daysInWeek: [{
          type: Input
        }],
        viewDateChange: [{
          type: Output
        }],
        onClick: [{
          type: HostListener,
          args: ["click"]
        }]
      });
    })();
    CalendarTodayDirective = class _CalendarTodayDirective {
      constructor() {
        this.viewDateChange = new EventEmitter();
        this.dateAdapter = inject(DateAdapter);
      }
      /**
       * @hidden
       */
      onClick() {
        this.viewDateChange.emit(this.dateAdapter.startOfDay(/* @__PURE__ */ new Date()));
      }
      static {
        this.\u0275fac = function CalendarTodayDirective_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _CalendarTodayDirective)();
        };
      }
      static {
        this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
          type: _CalendarTodayDirective,
          selectors: [["", "mwlCalendarToday", ""]],
          hostBindings: function CalendarTodayDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
              \u0275\u0275listener("click", function CalendarTodayDirective_click_HostBindingHandler() {
                return ctx.onClick();
              });
            }
          },
          inputs: {
            viewDate: "viewDate"
          },
          outputs: {
            viewDateChange: "viewDateChange"
          }
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarTodayDirective, [{
        type: Directive,
        args: [{
          selector: "[mwlCalendarToday]"
        }]
      }], null, {
        viewDate: [{
          type: Input
        }],
        viewDateChange: [{
          type: Output
        }],
        onClick: [{
          type: HostListener,
          args: ["click"]
        }]
      });
    })();
    CalendarAngularDateFormatter = class _CalendarAngularDateFormatter {
      constructor() {
        this.dateAdapter = inject(DateAdapter);
      }
      /**
       * The month view header week day labels
       */
      monthViewColumnHeader({
        date,
        locale
      }) {
        return formatDate(date, "EEEE", locale);
      }
      /**
       * The month view cell day number
       */
      monthViewDayNumber({
        date,
        locale
      }) {
        return formatDate(date, "d", locale);
      }
      /**
       * The month view title
       */
      monthViewTitle({
        date,
        locale
      }) {
        return formatDate(date, "LLLL y", locale);
      }
      /**
       * The week view header week day labels
       */
      weekViewColumnHeader({
        date,
        locale
      }) {
        return formatDate(date, "EEEE", locale);
      }
      /**
       * The week view sub header day and month labels
       */
      weekViewColumnSubHeader({
        date,
        locale
      }) {
        return formatDate(date, "MMM d", locale);
      }
      /**
       * The week view title
       */
      weekViewTitle({
        date,
        locale,
        weekStartsOn,
        excludeDays,
        daysInWeek
      }) {
        const {
          viewStart,
          viewEnd
        } = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek);
        const format = (dateToFormat, showYear) => formatDate(dateToFormat, "MMM d" + (showYear ? ", yyyy" : ""), locale);
        return `${format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear())} - ${format(viewEnd, true)}`;
      }
      /**
       * The time formatting down the left hand side of the week view
       */
      weekViewHour({
        date,
        locale
      }) {
        return formatDate(date, "h a", locale);
      }
      /**
       * The time formatting down the left hand side of the day view
       */
      dayViewHour({
        date,
        locale
      }) {
        return formatDate(date, "h a", locale);
      }
      /**
       * The day view title
       */
      dayViewTitle({
        date,
        locale
      }) {
        return formatDate(date, "EEEE, MMMM d, y", locale);
      }
      static {
        this.\u0275fac = function CalendarAngularDateFormatter_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _CalendarAngularDateFormatter)();
        };
      }
      static {
        this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
          token: _CalendarAngularDateFormatter,
          factory: _CalendarAngularDateFormatter.\u0275fac
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarAngularDateFormatter, [{
        type: Injectable
      }], null, null);
    })();
    CalendarDateFormatter = class _CalendarDateFormatter extends CalendarAngularDateFormatter {
      static {
        this.\u0275fac = /* @__PURE__ */ (() => {
          let \u0275CalendarDateFormatter_BaseFactory;
          return function CalendarDateFormatter_Factory(__ngFactoryType__) {
            return (\u0275CalendarDateFormatter_BaseFactory || (\u0275CalendarDateFormatter_BaseFactory = \u0275\u0275getInheritedFactory(_CalendarDateFormatter)))(__ngFactoryType__ || _CalendarDateFormatter);
          };
        })();
      }
      static {
        this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
          token: _CalendarDateFormatter,
          factory: _CalendarDateFormatter.\u0275fac
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarDateFormatter, [{
        type: Injectable
      }], null, null);
    })();
    CalendarDatePipe = class _CalendarDatePipe {
      constructor() {
        this.dateFormatter = inject(CalendarDateFormatter);
        this.locale = inject(LOCALE_ID);
      }
      transform(date, method, locale = this.locale, weekStartsOn = 0, excludeDays = [], daysInWeek) {
        if (typeof this.dateFormatter[method] === "undefined") {
          const allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(CalendarDateFormatter.prototype)).filter((iMethod) => iMethod !== "constructor");
          throw new Error(`${method} is not a valid date formatter. Can only be one of ${allowedMethods.join(", ")}`);
        }
        return this.dateFormatter[method]({
          date,
          locale,
          weekStartsOn,
          excludeDays,
          daysInWeek
        });
      }
      static {
        this.\u0275fac = function CalendarDatePipe_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _CalendarDatePipe)();
        };
      }
      static {
        this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
          name: "calendarDate",
          type: _CalendarDatePipe,
          pure: true
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarDatePipe, [{
        type: Pipe,
        args: [{
          name: "calendarDate"
        }]
      }], null, null);
    })();
    CalendarUtils = class _CalendarUtils {
      constructor() {
        this.dateAdapter = inject(DateAdapter);
      }
      getMonthView(args) {
        return getMonthView(this.dateAdapter, args);
      }
      getWeekViewHeader(args) {
        return getWeekViewHeader(this.dateAdapter, args);
      }
      getWeekView(args) {
        return getWeekView(this.dateAdapter, args);
      }
      static {
        this.\u0275fac = function CalendarUtils_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _CalendarUtils)();
        };
      }
      static {
        this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
          token: _CalendarUtils,
          factory: _CalendarUtils.\u0275fac
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarUtils, [{
        type: Injectable
      }], null, null);
    })();
    MOMENT = new InjectionToken("Moment");
    CalendarMomentDateFormatter = class _CalendarMomentDateFormatter {
      constructor() {
        this.moment = inject(MOMENT);
        this.dateAdapter = inject(DateAdapter);
      }
      /**
       * The month view header week day labels
       */
      monthViewColumnHeader({
        date,
        locale
      }) {
        return this.moment(date).locale(locale).format("dddd");
      }
      /**
       * The month view cell day number
       */
      monthViewDayNumber({
        date,
        locale
      }) {
        return this.moment(date).locale(locale).format("D");
      }
      /**
       * The month view title
       */
      monthViewTitle({
        date,
        locale
      }) {
        return this.moment(date).locale(locale).format("MMMM YYYY");
      }
      /**
       * The week view header week day labels
       */
      weekViewColumnHeader({
        date,
        locale
      }) {
        return this.moment(date).locale(locale).format("dddd");
      }
      /**
       * The week view sub header day and month labels
       */
      weekViewColumnSubHeader({
        date,
        locale
      }) {
        return this.moment(date).locale(locale).format("MMM D");
      }
      /**
       * The week view title
       */
      weekViewTitle({
        date,
        locale,
        weekStartsOn,
        excludeDays,
        daysInWeek
      }) {
        const {
          viewStart,
          viewEnd
        } = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek);
        const format = (dateToFormat, showYear) => this.moment(dateToFormat).locale(locale).format("MMM D" + (showYear ? ", YYYY" : ""));
        return `${format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear())} - ${format(viewEnd, true)}`;
      }
      /**
       * The time formatting down the left hand side of the week view
       */
      weekViewHour({
        date,
        locale
      }) {
        return this.moment(date).locale(locale).format("ha");
      }
      /**
       * The time formatting down the left hand side of the day view
       */
      dayViewHour({
        date,
        locale
      }) {
        return this.moment(date).locale(locale).format("ha");
      }
      /**
       * The day view title
       */
      dayViewTitle({
        date,
        locale
      }) {
        return this.moment(date).locale(locale).format("dddd, LL");
      }
      static {
        this.\u0275fac = function CalendarMomentDateFormatter_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _CalendarMomentDateFormatter)();
        };
      }
      static {
        this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
          token: _CalendarMomentDateFormatter,
          factory: _CalendarMomentDateFormatter.\u0275fac
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarMomentDateFormatter, [{
        type: Injectable
      }], null, null);
    })();
    CalendarNativeDateFormatter = class _CalendarNativeDateFormatter {
      constructor() {
        this.dateAdapter = inject(DateAdapter);
      }
      /**
       * The month view header week day labels
       */
      monthViewColumnHeader({
        date,
        locale
      }) {
        return new Intl.DateTimeFormat(locale, {
          weekday: "long"
        }).format(date);
      }
      /**
       * The month view cell day number
       */
      monthViewDayNumber({
        date,
        locale
      }) {
        return new Intl.DateTimeFormat(locale, {
          day: "numeric"
        }).format(date);
      }
      /**
       * The month view title
       */
      monthViewTitle({
        date,
        locale
      }) {
        return new Intl.DateTimeFormat(locale, {
          year: "numeric",
          month: "long"
        }).format(date);
      }
      /**
       * The week view header week day labels
       */
      weekViewColumnHeader({
        date,
        locale
      }) {
        return new Intl.DateTimeFormat(locale, {
          weekday: "long"
        }).format(date);
      }
      /**
       * The week view sub header day and month labels
       */
      weekViewColumnSubHeader({
        date,
        locale
      }) {
        return new Intl.DateTimeFormat(locale, {
          day: "numeric",
          month: "short"
        }).format(date);
      }
      /**
       * The week view title
       */
      weekViewTitle({
        date,
        locale,
        weekStartsOn,
        excludeDays,
        daysInWeek
      }) {
        const {
          viewStart,
          viewEnd
        } = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek);
        const format = (dateToFormat, showYear) => new Intl.DateTimeFormat(locale, {
          day: "numeric",
          month: "short",
          year: showYear ? "numeric" : void 0
        }).format(dateToFormat);
        return `${format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear())} - ${format(viewEnd, true)}`;
      }
      /**
       * The time formatting down the left hand side of the week view
       */
      weekViewHour({
        date,
        locale
      }) {
        return new Intl.DateTimeFormat(locale, {
          hour: "numeric"
        }).format(date);
      }
      /**
       * The time formatting down the left hand side of the day view
       */
      dayViewHour({
        date,
        locale
      }) {
        return new Intl.DateTimeFormat(locale, {
          hour: "numeric"
        }).format(date);
      }
      /**
       * The day view title
       */
      dayViewTitle({
        date,
        locale
      }) {
        return new Intl.DateTimeFormat(locale, {
          day: "numeric",
          month: "long",
          year: "numeric",
          weekday: "long"
        }).format(date);
      }
      static {
        this.\u0275fac = function CalendarNativeDateFormatter_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _CalendarNativeDateFormatter)();
        };
      }
      static {
        this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
          token: _CalendarNativeDateFormatter,
          factory: _CalendarNativeDateFormatter.\u0275fac
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarNativeDateFormatter, [{
        type: Injectable
      }], null, null);
    })();
    (function(CalendarEventTimesChangedEventType2) {
      CalendarEventTimesChangedEventType2["Drag"] = "drag";
      CalendarEventTimesChangedEventType2["Drop"] = "drop";
      CalendarEventTimesChangedEventType2["Resize"] = "resize";
    })(CalendarEventTimesChangedEventType || (CalendarEventTimesChangedEventType = {}));
    CalendarCommonModule = class _CalendarCommonModule {
      static forRoot(dateAdapter, config = {}) {
        return {
          ngModule: _CalendarCommonModule,
          providers: [dateAdapter, config.eventTitleFormatter || CalendarEventTitleFormatter, config.dateFormatter || CalendarDateFormatter, config.utils || CalendarUtils, config.a11y || CalendarA11y]
        };
      }
      static {
        this.\u0275fac = function CalendarCommonModule_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _CalendarCommonModule)();
        };
      }
      static {
        this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
          type: _CalendarCommonModule,
          imports: [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe, ClickDirective, KeydownEnterDirective],
          exports: [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe, ClickDirective, KeydownEnterDirective]
        });
      }
      static {
        this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarCommonModule, [{
        type: NgModule,
        args: [{
          imports: [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe, ClickDirective, KeydownEnterDirective],
          exports: [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe, ClickDirective, KeydownEnterDirective]
        }]
      }], null, null);
    })();
    CalendarMonthViewHeaderComponent = class _CalendarMonthViewHeaderComponent {
      constructor() {
        this.columnHeaderClicked = new EventEmitter();
      }
      static {
        this.\u0275fac = function CalendarMonthViewHeaderComponent_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _CalendarMonthViewHeaderComponent)();
        };
      }
      static {
        this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
          type: _CalendarMonthViewHeaderComponent,
          selectors: [["mwl-calendar-month-view-header"]],
          inputs: {
            days: "days",
            locale: "locale",
            customTemplate: "customTemplate"
          },
          outputs: {
            columnHeaderClicked: "columnHeaderClicked"
          },
          decls: 3,
          vars: 5,
          consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "row", 1, "cal-cell-row", "cal-header"], ["tabindex", "0", "role", "columnheader", 1, "cal-cell", 3, "cal-past", "cal-today", "cal-future", "cal-weekend", "ngClass"], ["tabindex", "0", "role", "columnheader", 1, "cal-cell", 3, "click", "ngClass"]],
          template: function CalendarMonthViewHeaderComponent_Template(rf, ctx) {
            if (rf & 1) {
              \u0275\u0275template(0, CalendarMonthViewHeaderComponent_ng_template_0_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(2, CalendarMonthViewHeaderComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
            }
            if (rf & 2) {
              const defaultTemplate_r6 = \u0275\u0275reference(1);
              \u0275\u0275advance(2);
              \u0275\u0275property("ngTemplateOutlet", ctx.customTemplate || defaultTemplate_r6)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c5, ctx.days, ctx.locale));
            }
          },
          dependencies: [NgClass, NgTemplateOutlet, CalendarDatePipe],
          encapsulation: 2
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarMonthViewHeaderComponent, [{
        type: Component,
        args: [{
          selector: "mwl-calendar-month-view-header",
          template: `
    <ng-template #defaultTemplate let-days="days" let-locale="locale">
      <div class="cal-cell-row cal-header" role="row">
        @for (day of days; track day.date.toISOString()) {
          <div
            class="cal-cell"
            [class.cal-past]="day.isPast"
            [class.cal-today]="day.isToday"
            [class.cal-future]="day.isFuture"
            [class.cal-weekend]="day.isWeekend"
            (click)="
              columnHeaderClicked.emit({
                isoDayNumber: day.day,
                sourceEvent: $event,
              })
            "
            [ngClass]="day.cssClass"
            tabindex="0"
            role="columnheader"
          >
            {{ day.date | calendarDate: 'monthViewColumnHeader' : locale }}
          </div>
        }
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        days: days,
        locale: locale,
      }"
    />
  `,
          imports: [NgClass, NgTemplateOutlet, CalendarDatePipe]
        }]
      }], null, {
        days: [{
          type: Input
        }],
        locale: [{
          type: Input
        }],
        customTemplate: [{
          type: Input
        }],
        columnHeaderClicked: [{
          type: Output
        }]
      });
    })();
    CalendarMonthCellComponent = class _CalendarMonthCellComponent {
      constructor() {
        this.highlightDay = new EventEmitter();
        this.unhighlightDay = new EventEmitter();
        this.eventClicked = new EventEmitter();
        this.validateDrag = isWithinThreshold;
      }
      static {
        this.\u0275fac = function CalendarMonthCellComponent_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _CalendarMonthCellComponent)();
        };
      }
      static {
        this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
          type: _CalendarMonthCellComponent,
          selectors: [["mwl-calendar-month-cell"]],
          hostAttrs: [1, "cal-cell", "cal-day-cell"],
          hostVars: 18,
          hostBindings: function CalendarMonthCellComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
              \u0275\u0275classProp("cal-past", ctx.day.isPast)("cal-today", ctx.day.isToday)("cal-future", ctx.day.isFuture)("cal-weekend", ctx.day.isWeekend)("cal-in-month", ctx.day.inMonth)("cal-out-month", !ctx.day.inMonth)("cal-has-events", ctx.day.events.length > 0)("cal-open", ctx.day === ctx.openDay)("cal-event-highlight", !!ctx.day.backgroundColor);
            }
          },
          inputs: {
            day: "day",
            openDay: "openDay",
            locale: "locale",
            tooltipPlacement: "tooltipPlacement",
            tooltipAppendToBody: "tooltipAppendToBody",
            customTemplate: "customTemplate",
            tooltipTemplate: "tooltipTemplate",
            tooltipDelay: "tooltipDelay"
          },
          outputs: {
            highlightDay: "highlightDay",
            unhighlightDay: "unhighlightDay",
            eventClicked: "eventClicked"
          },
          decls: 3,
          vars: 14,
          consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-cell-top"], ["aria-hidden", "true"], [1, "cal-day-badge"], [1, "cal-day-number"], [1, "cal-events"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event", 3, "ngStyle", "ngClass", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "cal-draggable", "dropData", "dragAxis", "validateDrag", "touchStartLongPress"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event", 3, "mouseenter", "mouseleave", "mwlClick", "ngStyle", "ngClass", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "dropData", "dragAxis", "validateDrag", "touchStartLongPress"]],
          template: function CalendarMonthCellComponent_Template(rf, ctx) {
            if (rf & 1) {
              \u0275\u0275template(0, CalendarMonthCellComponent_ng_template_0_Template, 8, 14, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(2, CalendarMonthCellComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
            }
            if (rf & 2) {
              const defaultTemplate_r14 = \u0275\u0275reference(1);
              \u0275\u0275advance(2);
              \u0275\u0275property("ngTemplateOutlet", ctx.customTemplate || defaultTemplate_r14)("ngTemplateOutletContext", \u0275\u0275pureFunctionV(2, _c6, [ctx.day, ctx.openDay, ctx.locale, ctx.tooltipPlacement, ctx.highlightDay, ctx.unhighlightDay, ctx.eventClicked, ctx.tooltipTemplate, ctx.tooltipAppendToBody, ctx.tooltipDelay, ctx.validateDrag]));
            }
          },
          dependencies: [DraggableDirective, NgStyle, NgClass, CalendarTooltipDirective, ClickDirective, NgTemplateOutlet, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe],
          encapsulation: 2
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarMonthCellComponent, [{
        type: Component,
        args: [{
          selector: "mwl-calendar-month-cell",
          template: `
    <ng-template
      #defaultTemplate
      let-day="day"
      let-openDay="openDay"
      let-locale="locale"
      let-tooltipPlacement="tooltipPlacement"
      let-highlightDay="highlightDay"
      let-unhighlightDay="unhighlightDay"
      let-eventClicked="eventClicked"
      let-tooltipTemplate="tooltipTemplate"
      let-tooltipAppendToBody="tooltipAppendToBody"
      let-tooltipDelay="tooltipDelay"
      let-validateDrag="validateDrag"
    >
      <div
        class="cal-cell-top"
        [attr.aria-label]="
          { day: day, locale: locale } | calendarA11y: 'monthCell'
        "
      >
        <span aria-hidden="true">
          @if (day.badgeTotal > 0) {
            <span class="cal-day-badge">{{ day.badgeTotal }}</span>
          }
          <span class="cal-day-number">{{
            day.date | calendarDate: 'monthViewDayNumber' : locale
          }}</span>
        </span>
      </div>
      @if (day.events.length > 0) {
        <div class="cal-events">
          @for (event of day.events; track event.id ?? event) {
            <div
              class="cal-event"
              [ngStyle]="{ backgroundColor: event.color?.primary }"
              [ngClass]="event?.cssClass"
              (mouseenter)="highlightDay.emit({ event: event })"
              (mouseleave)="unhighlightDay.emit({ event: event })"
              [mwlCalendarTooltip]="
                event.title | calendarEventTitle: 'monthTooltip' : event
              "
              [tooltipPlacement]="tooltipPlacement"
              [tooltipEvent]="event"
              [tooltipTemplate]="tooltipTemplate"
              [tooltipAppendToBody]="tooltipAppendToBody"
              [tooltipDelay]="tooltipDelay"
              mwlDraggable
              [class.cal-draggable]="event.draggable"
              dragActiveClass="cal-drag-active"
              [dropData]="{ event: event, draggedFrom: day }"
              [dragAxis]="{ x: event.draggable, y: event.draggable }"
              [validateDrag]="validateDrag"
              [touchStartLongPress]="{ delay: 300, delta: 30 }"
              (mwlClick)="
                eventClicked.emit({ event: event, sourceEvent: $event })
              "
              [attr.aria-hidden]="{} | calendarA11y: 'hideMonthCellEvents'"
            ></div>
          }
        </div>
      }
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        day: day,
        openDay: openDay,
        locale: locale,
        tooltipPlacement: tooltipPlacement,
        highlightDay: highlightDay,
        unhighlightDay: unhighlightDay,
        eventClicked: eventClicked,
        tooltipTemplate: tooltipTemplate,
        tooltipAppendToBody: tooltipAppendToBody,
        tooltipDelay: tooltipDelay,
        validateDrag: validateDrag,
      }"
    />
  `,
          host: {
            class: "cal-cell cal-day-cell",
            "[class.cal-past]": "day.isPast",
            "[class.cal-today]": "day.isToday",
            "[class.cal-future]": "day.isFuture",
            "[class.cal-weekend]": "day.isWeekend",
            "[class.cal-in-month]": "day.inMonth",
            "[class.cal-out-month]": "!day.inMonth",
            "[class.cal-has-events]": "day.events.length > 0",
            "[class.cal-open]": "day === openDay",
            "[class.cal-event-highlight]": "!!day.backgroundColor"
          },
          imports: [DraggableDirective, NgStyle, NgClass, CalendarTooltipDirective, ClickDirective, NgTemplateOutlet, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe]
        }]
      }], null, {
        day: [{
          type: Input
        }],
        openDay: [{
          type: Input
        }],
        locale: [{
          type: Input
        }],
        tooltipPlacement: [{
          type: Input
        }],
        tooltipAppendToBody: [{
          type: Input
        }],
        customTemplate: [{
          type: Input
        }],
        tooltipTemplate: [{
          type: Input
        }],
        tooltipDelay: [{
          type: Input
        }],
        highlightDay: [{
          type: Output
        }],
        unhighlightDay: [{
          type: Output
        }],
        eventClicked: [{
          type: Output
        }]
      });
    })();
    CalendarOpenDayEventsComponent = class _CalendarOpenDayEventsComponent {
      constructor() {
        this.isOpen = false;
        this.eventClicked = new EventEmitter();
        this.validateDrag = isWithinThreshold;
      }
      static {
        this.\u0275fac = function CalendarOpenDayEventsComponent_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _CalendarOpenDayEventsComponent)();
        };
      }
      static {
        this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
          type: _CalendarOpenDayEventsComponent,
          selectors: [["mwl-calendar-open-day-events"]],
          inputs: {
            locale: "locale",
            isOpen: "isOpen",
            events: "events",
            customTemplate: "customTemplate",
            eventTitleTemplate: "eventTitleTemplate",
            eventActionsTemplate: "eventActionsTemplate",
            date: "date"
          },
          outputs: {
            eventClicked: "eventClicked"
          },
          decls: 3,
          vars: 7,
          consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "application", 1, "cal-open-day-events"], ["tabindex", "-1", "role", "alert"], ["tabindex", "0", "role", "landmark"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngClass", "cal-draggable", "dropData", "dragAxis", "validateDrag", "touchStartLongPress"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngClass", "dropData", "dragAxis", "validateDrag", "touchStartLongPress"], [1, "cal-event", 3, "ngStyle"], ["view", "month", "tabindex", "0", 3, "mwlClick", "mwlKeydownEnter", "event", "customTemplate"], [3, "event", "customTemplate"]],
          template: function CalendarOpenDayEventsComponent_Template(rf, ctx) {
            if (rf & 1) {
              \u0275\u0275template(0, CalendarOpenDayEventsComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(2, CalendarOpenDayEventsComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
            }
            if (rf & 2) {
              const defaultTemplate_r8 = \u0275\u0275reference(1);
              \u0275\u0275advance(2);
              \u0275\u0275property("ngTemplateOutlet", ctx.customTemplate || defaultTemplate_r8)("ngTemplateOutletContext", \u0275\u0275pureFunction4(2, _c12, ctx.events, ctx.eventClicked, ctx.isOpen, ctx.validateDrag));
            }
          },
          dependencies: [DraggableDirective, NgClass, NgStyle, CalendarEventTitleComponent, ClickDirective, KeydownEnterDirective, CalendarEventActionsComponent, NgTemplateOutlet, CalendarA11yPipe],
          encapsulation: 2
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarOpenDayEventsComponent, [{
        type: Component,
        args: [{
          selector: "mwl-calendar-open-day-events",
          template: `
    <ng-template
      #defaultTemplate
      let-events="events"
      let-eventClicked="eventClicked"
      let-isOpen="isOpen"
      let-validateDrag="validateDrag"
    >
      @if (isOpen) {
        <div
          class="cal-open-day-events"
          animate.leave="cal-open-day-events-closing"
          role="application"
        >
          <span
            tabindex="-1"
            role="alert"
            [attr.aria-label]="
              { date: date, locale: locale }
                | calendarA11y: 'openDayEventsAlert'
            "
          ></span>
          <span
            tabindex="0"
            role="landmark"
            [attr.aria-label]="
              { date: date, locale: locale }
                | calendarA11y: 'openDayEventsLandmark'
            "
          ></span>
          @for (event of events; track event.id ?? event) {
            <div
              [ngClass]="event?.cssClass"
              mwlDraggable
              [class.cal-draggable]="event.draggable"
              dragActiveClass="cal-drag-active"
              [dropData]="{ event: event }"
              [dragAxis]="{ x: event.draggable, y: event.draggable }"
              [validateDrag]="validateDrag"
              [touchStartLongPress]="{ delay: 300, delta: 30 }"
            >
              <span
                class="cal-event"
                [ngStyle]="{ backgroundColor: event.color?.primary }"
              >
              </span>
              &ngsp;
              <mwl-calendar-event-title
                [event]="event"
                [customTemplate]="eventTitleTemplate"
                view="month"
                (mwlClick)="
                  eventClicked.emit({ event: event, sourceEvent: $event })
                "
                (mwlKeydownEnter)="
                  eventClicked.emit({ event: event, sourceEvent: $event })
                "
                tabindex="0"
                [attr.aria-label]="
                  { event: event, locale: locale }
                    | calendarA11y: 'eventDescription'
                "
              />
              &ngsp;
              <mwl-calendar-event-actions
                [event]="event"
                [customTemplate]="eventActionsTemplate"
              />
            </div>
          }
        </div>
      }
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        events: events,
        eventClicked: eventClicked,
        isOpen: isOpen,
        validateDrag: validateDrag,
      }"
    />
  `,
          imports: [DraggableDirective, NgClass, NgStyle, CalendarEventTitleComponent, ClickDirective, KeydownEnterDirective, CalendarEventActionsComponent, NgTemplateOutlet, CalendarA11yPipe]
        }]
      }], null, {
        locale: [{
          type: Input
        }],
        isOpen: [{
          type: Input
        }],
        events: [{
          type: Input
        }],
        customTemplate: [{
          type: Input
        }],
        eventTitleTemplate: [{
          type: Input
        }],
        eventActionsTemplate: [{
          type: Input
        }],
        date: [{
          type: Input
        }],
        eventClicked: [{
          type: Output
        }]
      });
    })();
    CalendarMonthViewComponent = class _CalendarMonthViewComponent {
      constructor() {
        this.events = [];
        this.excludeDays = [];
        this.activeDayIsOpen = false;
        this.locale = inject(LOCALE_ID);
        this.tooltipPlacement = "auto";
        this.tooltipAppendToBody = true;
        this.tooltipDelay = null;
        this.beforeViewRender = new EventEmitter();
        this.dayClicked = new EventEmitter();
        this.eventClicked = new EventEmitter();
        this.columnHeaderClicked = new EventEmitter();
        this.eventTimesChanged = new EventEmitter();
        this.cdr = inject(ChangeDetectorRef);
        this.utils = inject(CalendarUtils);
        this.dateAdapter = inject(DateAdapter);
      }
      /**
       * @hidden
       */
      ngOnInit() {
        if (this.refresh) {
          this.refreshSubscription = this.refresh.subscribe(() => {
            this.refreshAll();
            this.cdr.markForCheck();
          });
        }
      }
      /**
       * @hidden
       */
      ngOnChanges(changes) {
        const refreshHeader = changes.viewDate || changes.excludeDays || changes.weekendDays;
        const refreshBody = changes.viewDate || changes.events || changes.excludeDays || changes.weekendDays;
        if (refreshHeader) {
          this.refreshHeader();
        }
        if (changes.events) {
          validateEvents2(this.events);
        }
        if (refreshBody) {
          this.refreshBody();
        }
        if (refreshHeader || refreshBody) {
          this.emitBeforeViewRender();
        }
        if (changes.activeDayIsOpen || changes.viewDate || changes.events || changes.excludeDays || changes.activeDay) {
          this.checkActiveDayIsOpen();
        }
      }
      /**
       * @hidden
       */
      ngOnDestroy() {
        if (this.refreshSubscription) {
          this.refreshSubscription.unsubscribe();
        }
      }
      /**
       * @hidden
       */
      toggleDayHighlight(event, isHighlighted) {
        this.view.days.forEach((day) => {
          if (isHighlighted && day.events.indexOf(event) > -1) {
            day.backgroundColor = event.color && event.color.secondary || "#D1E8FF";
          } else {
            delete day.backgroundColor;
          }
        });
      }
      /**
       * @hidden
       */
      eventDropped(droppedOn, event, draggedFrom) {
        if (droppedOn !== draggedFrom) {
          const year = this.dateAdapter.getYear(droppedOn.date);
          const month = this.dateAdapter.getMonth(droppedOn.date);
          const date = this.dateAdapter.getDate(droppedOn.date);
          const newStart = this.dateAdapter.setDate(this.dateAdapter.setMonth(this.dateAdapter.setYear(event.start, year), month), date);
          let newEnd;
          if (event.end) {
            const secondsDiff = this.dateAdapter.differenceInSeconds(newStart, event.start);
            newEnd = this.dateAdapter.addSeconds(event.end, secondsDiff);
          }
          this.eventTimesChanged.emit({
            event,
            newStart,
            newEnd,
            day: droppedOn,
            type: CalendarEventTimesChangedEventType.Drop
          });
        }
      }
      refreshHeader() {
        this.columnHeaders = this.utils.getWeekViewHeader({
          viewDate: this.viewDate,
          weekStartsOn: this.weekStartsOn,
          excluded: this.excludeDays,
          weekendDays: this.weekendDays
        });
      }
      refreshBody() {
        this.view = this.utils.getMonthView({
          events: this.events,
          viewDate: this.viewDate,
          weekStartsOn: this.weekStartsOn,
          excluded: this.excludeDays,
          weekendDays: this.weekendDays
        });
      }
      checkActiveDayIsOpen() {
        if (this.activeDayIsOpen === true) {
          const activeDay = this.activeDay || this.viewDate;
          this.openDay = this.view.days.find((day) => this.dateAdapter.isSameDay(day.date, activeDay));
          const index = this.view.days.indexOf(this.openDay);
          this.openRowIndex = Math.floor(index / this.view.totalDaysVisibleInWeek) * this.view.totalDaysVisibleInWeek;
        } else {
          this.openRowIndex = null;
          this.openDay = null;
        }
      }
      refreshAll() {
        this.refreshHeader();
        this.refreshBody();
        this.emitBeforeViewRender();
        this.checkActiveDayIsOpen();
      }
      emitBeforeViewRender() {
        if (this.columnHeaders && this.view) {
          this.beforeViewRender.emit({
            header: this.columnHeaders,
            body: this.view.days,
            period: this.view.period
          });
        }
      }
      static {
        this.\u0275fac = function CalendarMonthViewComponent_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _CalendarMonthViewComponent)();
        };
      }
      static {
        this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
          type: _CalendarMonthViewComponent,
          selectors: [["mwl-calendar-month-view"]],
          inputs: {
            viewDate: "viewDate",
            events: "events",
            excludeDays: "excludeDays",
            activeDayIsOpen: "activeDayIsOpen",
            activeDay: "activeDay",
            refresh: "refresh",
            locale: "locale",
            tooltipPlacement: "tooltipPlacement",
            tooltipTemplate: "tooltipTemplate",
            tooltipAppendToBody: "tooltipAppendToBody",
            tooltipDelay: "tooltipDelay",
            weekStartsOn: "weekStartsOn",
            headerTemplate: "headerTemplate",
            cellTemplate: "cellTemplate",
            openDayEventsTemplate: "openDayEventsTemplate",
            eventTitleTemplate: "eventTitleTemplate",
            eventActionsTemplate: "eventActionsTemplate",
            weekendDays: "weekendDays"
          },
          outputs: {
            beforeViewRender: "beforeViewRender",
            dayClicked: "dayClicked",
            eventClicked: "eventClicked",
            columnHeaderClicked: "columnHeaderClicked",
            eventTimesChanged: "eventTimesChanged"
          },
          features: [\u0275\u0275NgOnChangesFeature],
          decls: 5,
          vars: 3,
          consts: [["role", "grid", 1, "cal-month-view"], [3, "columnHeaderClicked", "days", "locale", "customTemplate"], [1, "cal-days"], ["role", "row", 1, "cal-cell-row"], ["role", "gridcell", "mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "ngClass", "day", "openDay", "locale", "tooltipPlacement", "tooltipAppendToBody", "tooltipTemplate", "tooltipDelay", "customTemplate", "ngStyle", "clickListenerDisabled"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "eventClicked", "drop", "locale", "isOpen", "events", "date", "customTemplate", "eventTitleTemplate", "eventActionsTemplate"], ["role", "gridcell", "mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "mwlClick", "mwlKeydownEnter", "highlightDay", "unhighlightDay", "drop", "eventClicked", "ngClass", "day", "openDay", "locale", "tooltipPlacement", "tooltipAppendToBody", "tooltipTemplate", "tooltipDelay", "customTemplate", "ngStyle", "clickListenerDisabled"]],
          template: function CalendarMonthViewComponent_Template(rf, ctx) {
            if (rf & 1) {
              \u0275\u0275elementStart(0, "div", 0)(1, "mwl-calendar-month-view-header", 1);
              \u0275\u0275listener("columnHeaderClicked", function CalendarMonthViewComponent_Template_mwl_calendar_month_view_header_columnHeaderClicked_1_listener($event) {
                return ctx.columnHeaderClicked.emit($event);
              });
              \u0275\u0275elementEnd();
              \u0275\u0275elementStart(2, "div", 2);
              \u0275\u0275repeaterCreate(3, CalendarMonthViewComponent_For_4_Template, 6, 11, "div", null, \u0275\u0275repeaterTrackByIdentity);
              \u0275\u0275elementEnd()();
            }
            if (rf & 2) {
              \u0275\u0275advance();
              \u0275\u0275property("days", ctx.columnHeaders)("locale", ctx.locale)("customTemplate", ctx.headerTemplate);
              \u0275\u0275advance(2);
              \u0275\u0275repeater(ctx.view.rowOffsets);
            }
          },
          dependencies: [CalendarMonthViewHeaderComponent, CalendarMonthCellComponent, DroppableDirective, NgClass, NgStyle, ClickDirective, KeydownEnterDirective, CalendarOpenDayEventsComponent, SlicePipe, CalendarA11yPipe],
          encapsulation: 2
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarMonthViewComponent, [{
        type: Component,
        args: [{
          selector: "mwl-calendar-month-view",
          template: `
    <div class="cal-month-view" role="grid">
      <mwl-calendar-month-view-header
        [days]="columnHeaders"
        [locale]="locale"
        (columnHeaderClicked)="columnHeaderClicked.emit($event)"
        [customTemplate]="headerTemplate"
      />
      <div class="cal-days">
        @for (rowIndex of view.rowOffsets; track rowIndex) {
          <div>
            <div role="row" class="cal-cell-row">
              @for (
                day of view.days
                  | slice: rowIndex : rowIndex + view.totalDaysVisibleInWeek;
                track day.date.toISOString()
              ) {
                <mwl-calendar-month-cell
                  role="gridcell"
                  [ngClass]="day?.cssClass"
                  [day]="day"
                  [openDay]="openDay"
                  [locale]="locale"
                  [tooltipPlacement]="tooltipPlacement"
                  [tooltipAppendToBody]="tooltipAppendToBody"
                  [tooltipTemplate]="tooltipTemplate"
                  [tooltipDelay]="tooltipDelay"
                  [customTemplate]="cellTemplate"
                  [ngStyle]="{ backgroundColor: day.backgroundColor }"
                  (mwlClick)="
                    dayClicked.emit({ day: day, sourceEvent: $event })
                  "
                  [clickListenerDisabled]="!dayClicked.observed"
                  (mwlKeydownEnter)="
                    dayClicked.emit({ day: day, sourceEvent: $event })
                  "
                  (highlightDay)="toggleDayHighlight($event.event, true)"
                  (unhighlightDay)="toggleDayHighlight($event.event, false)"
                  mwlDroppable
                  dragOverClass="cal-drag-over"
                  (drop)="
                    eventDropped(
                      day,
                      $event.dropData.event,
                      $event.dropData.draggedFrom
                    )
                  "
                  (eventClicked)="
                    eventClicked.emit({
                      event: $event.event,
                      sourceEvent: $event.sourceEvent,
                    })
                  "
                  [attr.tabindex]="{} | calendarA11y: 'monthCellTabIndex'"
                />
              }
            </div>
            <mwl-calendar-open-day-events
              [locale]="locale"
              [isOpen]="openRowIndex === rowIndex"
              [events]="openDay?.events"
              [date]="openDay?.date"
              [customTemplate]="openDayEventsTemplate"
              [eventTitleTemplate]="eventTitleTemplate"
              [eventActionsTemplate]="eventActionsTemplate"
              (eventClicked)="
                eventClicked.emit({
                  event: $event.event,
                  sourceEvent: $event.sourceEvent,
                })
              "
              mwlDroppable
              dragOverClass="cal-drag-over"
              (drop)="
                eventDropped(
                  openDay,
                  $event.dropData.event,
                  $event.dropData.draggedFrom
                )
              "
            />
          </div>
        }
      </div>
    </div>
  `,
          imports: [CalendarMonthViewHeaderComponent, CalendarMonthCellComponent, DroppableDirective, NgClass, NgStyle, ClickDirective, KeydownEnterDirective, CalendarOpenDayEventsComponent, SlicePipe, CalendarA11yPipe]
        }]
      }], null, {
        viewDate: [{
          type: Input
        }],
        events: [{
          type: Input
        }],
        excludeDays: [{
          type: Input
        }],
        activeDayIsOpen: [{
          type: Input
        }],
        activeDay: [{
          type: Input
        }],
        refresh: [{
          type: Input
        }],
        locale: [{
          type: Input
        }],
        tooltipPlacement: [{
          type: Input
        }],
        tooltipTemplate: [{
          type: Input
        }],
        tooltipAppendToBody: [{
          type: Input
        }],
        tooltipDelay: [{
          type: Input
        }],
        weekStartsOn: [{
          type: Input
        }],
        headerTemplate: [{
          type: Input
        }],
        cellTemplate: [{
          type: Input
        }],
        openDayEventsTemplate: [{
          type: Input
        }],
        eventTitleTemplate: [{
          type: Input
        }],
        eventActionsTemplate: [{
          type: Input
        }],
        weekendDays: [{
          type: Input
        }],
        beforeViewRender: [{
          type: Output
        }],
        dayClicked: [{
          type: Output
        }],
        eventClicked: [{
          type: Output
        }],
        columnHeaderClicked: [{
          type: Output
        }],
        eventTimesChanged: [{
          type: Output
        }]
      });
    })();
    CalendarMonthModule = class _CalendarMonthModule {
      static {
        this.\u0275fac = function CalendarMonthModule_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _CalendarMonthModule)();
        };
      }
      static {
        this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
          type: _CalendarMonthModule,
          imports: [DragAndDropModule, CalendarCommonModule, CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent],
          exports: [DragAndDropModule, CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent]
        });
      }
      static {
        this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
          imports: [DragAndDropModule, CalendarCommonModule, DragAndDropModule]
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarMonthModule, [{
        type: NgModule,
        args: [{
          imports: [DragAndDropModule, CalendarCommonModule, CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent],
          exports: [DragAndDropModule, CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent]
        }]
      }], null, null);
    })();
    CalendarDragHelper = class {
      constructor(dragContainerElement, draggableElement) {
        this.dragContainerElement = dragContainerElement;
        this.startPosition = draggableElement.getBoundingClientRect();
      }
      validateDrag({
        x,
        y,
        snapDraggedEvents,
        dragAlreadyMoved,
        transform
      }) {
        const isDraggedWithinThreshold = isWithinThreshold({
          x,
          y
        }) || dragAlreadyMoved;
        if (snapDraggedEvents) {
          const inner = Object.assign({}, this.startPosition, {
            left: this.startPosition.left + transform.x,
            right: this.startPosition.right + transform.x,
            top: this.startPosition.top + transform.y,
            bottom: this.startPosition.bottom + transform.y
          });
          if (isDraggedWithinThreshold) {
            const outer = this.dragContainerElement.getBoundingClientRect();
            const isTopInside = outer.top < inner.top && inner.top < outer.bottom;
            const isBottomInside = outer.top < inner.bottom && inner.bottom < outer.bottom;
            return isInsideLeftAndRight(outer, inner) && (isTopInside || isBottomInside);
          }
          return false;
        } else {
          return isDraggedWithinThreshold;
        }
      }
    };
    CalendarResizeHelper = class {
      constructor(resizeContainerElement, minWidth, rtl) {
        this.resizeContainerElement = resizeContainerElement;
        this.minWidth = minWidth;
        this.rtl = rtl;
      }
      validateResize({
        rectangle,
        edges
      }) {
        if (this.rtl) {
          if (typeof edges.left !== "undefined") {
            rectangle.left -= edges.left;
            rectangle.right += edges.left;
          } else if (typeof edges.right !== "undefined") {
            rectangle.left += edges.right;
            rectangle.right -= edges.right;
          }
          rectangle.width = rectangle.right - rectangle.left;
        }
        if (this.minWidth && Math.ceil(rectangle.width) < Math.ceil(this.minWidth)) {
          return false;
        }
        return isInside(this.resizeContainerElement.getBoundingClientRect(), rectangle);
      }
    };
    CalendarWeekViewHeaderComponent = class _CalendarWeekViewHeaderComponent {
      constructor() {
        this.dayHeaderClicked = new EventEmitter();
        this.eventDropped = new EventEmitter();
        this.dragEnter = new EventEmitter();
      }
      static {
        this.\u0275fac = function CalendarWeekViewHeaderComponent_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _CalendarWeekViewHeaderComponent)();
        };
      }
      static {
        this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
          type: _CalendarWeekViewHeaderComponent,
          selectors: [["mwl-calendar-week-view-header"]],
          inputs: {
            days: "days",
            locale: "locale",
            customTemplate: "customTemplate"
          },
          outputs: {
            dayHeaderClicked: "dayHeaderClicked",
            eventDropped: "eventDropped",
            dragEnter: "dragEnter"
          },
          decls: 3,
          vars: 8,
          consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "row", 1, "cal-day-headers"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", "tabindex", "0", "role", "columnheader", 1, "cal-header", 3, "cal-past", "cal-today", "cal-future", "cal-weekend", "ngClass"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", "tabindex", "0", "role", "columnheader", 1, "cal-header", 3, "mwlClick", "drop", "dragEnter", "ngClass"]],
          template: function CalendarWeekViewHeaderComponent_Template(rf, ctx) {
            if (rf & 1) {
              \u0275\u0275template(0, CalendarWeekViewHeaderComponent_ng_template_0_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(2, CalendarWeekViewHeaderComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
            }
            if (rf & 2) {
              const defaultTemplate_r8 = \u0275\u0275reference(1);
              \u0275\u0275advance(2);
              \u0275\u0275property("ngTemplateOutlet", ctx.customTemplate || defaultTemplate_r8)("ngTemplateOutletContext", \u0275\u0275pureFunction5(2, _c15, ctx.days, ctx.locale, ctx.dayHeaderClicked, ctx.eventDropped, ctx.dragEnter));
            }
          },
          dependencies: [DroppableDirective, NgClass, ClickDirective, NgTemplateOutlet, CalendarDatePipe],
          encapsulation: 2
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarWeekViewHeaderComponent, [{
        type: Component,
        args: [{
          selector: "mwl-calendar-week-view-header",
          template: `
    <ng-template
      #defaultTemplate
      let-days="days"
      let-locale="locale"
      let-dayHeaderClicked="dayHeaderClicked"
      let-eventDropped="eventDropped"
      let-dragEnter="dragEnter"
    >
      <div class="cal-day-headers" role="row">
        @for (day of days; track day.date.toISOString()) {
          <div
            class="cal-header"
            [class.cal-past]="day.isPast"
            [class.cal-today]="day.isToday"
            [class.cal-future]="day.isFuture"
            [class.cal-weekend]="day.isWeekend"
            [ngClass]="day.cssClass"
            (mwlClick)="
              dayHeaderClicked.emit({ day: day, sourceEvent: $event })
            "
            mwlDroppable
            dragOverClass="cal-drag-over"
            (drop)="
              eventDropped.emit({
                event: $event.dropData.event,
                newStart: day.date,
              })
            "
            (dragEnter)="dragEnter.emit({ date: day.date })"
            tabindex="0"
            role="columnheader"
          >
            <b>{{ day.date | calendarDate: 'weekViewColumnHeader' : locale }}</b
            ><br />
            <span>{{
              day.date | calendarDate: 'weekViewColumnSubHeader' : locale
            }}</span>
          </div>
        }
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        days: days,
        locale: locale,
        dayHeaderClicked: dayHeaderClicked,
        eventDropped: eventDropped,
        dragEnter: dragEnter,
      }"
    />
  `,
          imports: [DroppableDirective, NgClass, ClickDirective, NgTemplateOutlet, CalendarDatePipe]
        }]
      }], null, {
        days: [{
          type: Input
        }],
        locale: [{
          type: Input
        }],
        customTemplate: [{
          type: Input
        }],
        dayHeaderClicked: [{
          type: Output
        }],
        eventDropped: [{
          type: Output
        }],
        dragEnter: [{
          type: Output
        }]
      });
    })();
    CalendarWeekViewEventComponent = class _CalendarWeekViewEventComponent {
      constructor() {
        this.eventClicked = new EventEmitter();
      }
      static {
        this.\u0275fac = function CalendarWeekViewEventComponent_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _CalendarWeekViewEventComponent)();
        };
      }
      static {
        this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
          type: _CalendarWeekViewEventComponent,
          selectors: [["mwl-calendar-week-view-event"]],
          inputs: {
            locale: "locale",
            weekEvent: "weekEvent",
            tooltipPlacement: "tooltipPlacement",
            tooltipAppendToBody: "tooltipAppendToBody",
            tooltipDisabled: "tooltipDisabled",
            tooltipDelay: "tooltipDelay",
            customTemplate: "customTemplate",
            eventTitleTemplate: "eventTitleTemplate",
            eventActionsTemplate: "eventActionsTemplate",
            tooltipTemplate: "tooltipTemplate",
            column: "column",
            daysInWeek: "daysInWeek"
          },
          outputs: {
            eventClicked: "eventClicked"
          },
          decls: 3,
          vars: 12,
          consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "0", "role", "application", 1, "cal-event", 3, "mwlClick", "mwlKeydownEnter", "ngStyle", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay"], [3, "event", "customTemplate"], [3, "event", "customTemplate", "view"]],
          template: function CalendarWeekViewEventComponent_Template(rf, ctx) {
            if (rf & 1) {
              \u0275\u0275template(0, CalendarWeekViewEventComponent_ng_template_0_Template, 6, 27, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(2, CalendarWeekViewEventComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
            }
            if (rf & 2) {
              const defaultTemplate_r11 = \u0275\u0275reference(1);
              \u0275\u0275advance(2);
              \u0275\u0275property("ngTemplateOutlet", ctx.customTemplate || defaultTemplate_r11)("ngTemplateOutletContext", \u0275\u0275pureFunctionV(2, _c16, [ctx.weekEvent, ctx.tooltipPlacement, ctx.eventClicked, ctx.tooltipTemplate, ctx.tooltipAppendToBody, ctx.tooltipDisabled, ctx.tooltipDelay, ctx.column, ctx.daysInWeek]));
            }
          },
          dependencies: [NgStyle, CalendarTooltipDirective, ClickDirective, KeydownEnterDirective, CalendarEventActionsComponent, CalendarEventTitleComponent, NgTemplateOutlet, CalendarEventTitlePipe, CalendarA11yPipe],
          encapsulation: 2
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarWeekViewEventComponent, [{
        type: Component,
        args: [{
          selector: "mwl-calendar-week-view-event",
          template: `
    <ng-template
      #defaultTemplate
      let-weekEvent="weekEvent"
      let-tooltipPlacement="tooltipPlacement"
      let-eventClicked="eventClicked"
      let-tooltipTemplate="tooltipTemplate"
      let-tooltipAppendToBody="tooltipAppendToBody"
      let-tooltipDisabled="tooltipDisabled"
      let-tooltipDelay="tooltipDelay"
      let-column="column"
      let-daysInWeek="daysInWeek"
    >
      <div
        class="cal-event"
        [ngStyle]="{
          color: weekEvent.event.color?.secondaryText,
          backgroundColor: weekEvent.event.color?.secondary,
          borderColor: weekEvent.event.color?.primary,
        }"
        [mwlCalendarTooltip]="
          !tooltipDisabled
            ? (weekEvent.event.title
              | calendarEventTitle
                : (daysInWeek === 1 ? 'dayTooltip' : 'weekTooltip')
                : weekEvent.tempEvent || weekEvent.event)
            : ''
        "
        [tooltipPlacement]="tooltipPlacement"
        [tooltipEvent]="weekEvent.tempEvent || weekEvent.event"
        [tooltipTemplate]="tooltipTemplate"
        [tooltipAppendToBody]="tooltipAppendToBody"
        [tooltipDelay]="tooltipDelay"
        (mwlClick)="eventClicked.emit({ sourceEvent: $event })"
        (mwlKeydownEnter)="eventClicked.emit({ sourceEvent: $event })"
        tabindex="0"
        role="application"
        [attr.aria-label]="
          { event: weekEvent.tempEvent || weekEvent.event, locale: locale }
            | calendarA11y: 'eventDescription'
        "
      >
        <mwl-calendar-event-actions
          [event]="weekEvent.tempEvent || weekEvent.event"
          [customTemplate]="eventActionsTemplate"
        />
        &ngsp;
        <mwl-calendar-event-title
          [event]="weekEvent.tempEvent || weekEvent.event"
          [customTemplate]="eventTitleTemplate"
          [view]="daysInWeek === 1 ? 'day' : 'week'"
        />
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        weekEvent: weekEvent,
        tooltipPlacement: tooltipPlacement,
        eventClicked: eventClicked,
        tooltipTemplate: tooltipTemplate,
        tooltipAppendToBody: tooltipAppendToBody,
        tooltipDisabled: tooltipDisabled,
        tooltipDelay: tooltipDelay,
        column: column,
        daysInWeek: daysInWeek,
      }"
    />
  `,
          imports: [NgStyle, CalendarTooltipDirective, ClickDirective, KeydownEnterDirective, CalendarEventActionsComponent, CalendarEventTitleComponent, NgTemplateOutlet, CalendarEventTitlePipe, CalendarA11yPipe]
        }]
      }], null, {
        locale: [{
          type: Input
        }],
        weekEvent: [{
          type: Input
        }],
        tooltipPlacement: [{
          type: Input
        }],
        tooltipAppendToBody: [{
          type: Input
        }],
        tooltipDisabled: [{
          type: Input
        }],
        tooltipDelay: [{
          type: Input
        }],
        customTemplate: [{
          type: Input
        }],
        eventTitleTemplate: [{
          type: Input
        }],
        eventActionsTemplate: [{
          type: Input
        }],
        tooltipTemplate: [{
          type: Input
        }],
        column: [{
          type: Input
        }],
        daysInWeek: [{
          type: Input
        }],
        eventClicked: [{
          type: Output
        }]
      });
    })();
    CalendarWeekViewHourSegmentComponent = class _CalendarWeekViewHourSegmentComponent {
      static {
        this.\u0275fac = function CalendarWeekViewHourSegmentComponent_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _CalendarWeekViewHourSegmentComponent)();
        };
      }
      static {
        this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
          type: _CalendarWeekViewHourSegmentComponent,
          selectors: [["mwl-calendar-week-view-hour-segment"]],
          inputs: {
            segment: "segment",
            segmentHeight: "segmentHeight",
            locale: "locale",
            isTimeLabel: "isTimeLabel",
            daysInWeek: "daysInWeek",
            customTemplate: "customTemplate"
          },
          decls: 3,
          vars: 8,
          consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-hour-segment", 3, "ngClass"], [1, "cal-time"]],
          template: function CalendarWeekViewHourSegmentComponent_Template(rf, ctx) {
            if (rf & 1) {
              \u0275\u0275template(0, CalendarWeekViewHourSegmentComponent_ng_template_0_Template, 3, 13, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(2, CalendarWeekViewHourSegmentComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
            }
            if (rf & 2) {
              const defaultTemplate_r7 = \u0275\u0275reference(1);
              \u0275\u0275advance(2);
              \u0275\u0275property("ngTemplateOutlet", ctx.customTemplate || defaultTemplate_r7)("ngTemplateOutletContext", \u0275\u0275pureFunction5(2, _c18, ctx.segment, ctx.locale, ctx.segmentHeight, ctx.isTimeLabel, ctx.daysInWeek));
            }
          },
          dependencies: [NgClass, NgTemplateOutlet, CalendarDatePipe, CalendarA11yPipe],
          encapsulation: 2
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarWeekViewHourSegmentComponent, [{
        type: Component,
        args: [{
          selector: "mwl-calendar-week-view-hour-segment",
          template: `
    <ng-template
      #defaultTemplate
      let-segment="segment"
      let-locale="locale"
      let-segmentHeight="segmentHeight"
      let-isTimeLabel="isTimeLabel"
      let-daysInWeek="daysInWeek"
    >
      <div
        [attr.aria-hidden]="
          {}
            | calendarA11y
              : (daysInWeek === 1
                  ? 'hideDayHourSegment'
                  : 'hideWeekHourSegment')
        "
        class="cal-hour-segment"
        [style.height.px]="segmentHeight"
        [class.cal-hour-start]="segment.isStart"
        [class.cal-after-hour-start]="!segment.isStart"
        [ngClass]="segment.cssClass"
      >
        @if (isTimeLabel) {
          <div class="cal-time">
            {{
              segment.displayDate
                | calendarDate
                  : (daysInWeek === 1 ? 'dayViewHour' : 'weekViewHour')
                  : locale
            }}
          </div>
        }
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        segment: segment,
        locale: locale,
        segmentHeight: segmentHeight,
        isTimeLabel: isTimeLabel,
        daysInWeek: daysInWeek,
      }"
    />
  `,
          imports: [NgClass, NgTemplateOutlet, CalendarDatePipe, CalendarA11yPipe]
        }]
      }], null, {
        segment: [{
          type: Input
        }],
        segmentHeight: [{
          type: Input
        }],
        locale: [{
          type: Input
        }],
        isTimeLabel: [{
          type: Input
        }],
        daysInWeek: [{
          type: Input
        }],
        customTemplate: [{
          type: Input
        }]
      });
    })();
    CalendarWeekViewCurrentTimeMarkerComponent = class _CalendarWeekViewCurrentTimeMarkerComponent {
      constructor() {
        this.columnDate$ = new BehaviorSubject(void 0);
        this.dateAdapter = inject(DateAdapter);
        this.zone = inject(NgZone);
        this.marker$ = this.zone.onStable.pipe(switchMap(() => interval(60 * 1e3)), startWith(0), switchMap(() => this.columnDate$), map((columnDate) => {
          const startOfDay2 = this.dateAdapter.setMinutes(this.dateAdapter.setHours(columnDate, this.dayStartHour), this.dayStartMinute);
          const endOfDay2 = this.dateAdapter.setMinutes(this.dateAdapter.setHours(columnDate, this.dayEndHour), this.dayEndMinute);
          const hourHeightModifier = this.hourSegments * this.hourSegmentHeight / (this.hourDuration || 60);
          const now = /* @__PURE__ */ new Date();
          return {
            isVisible: this.dateAdapter.isSameDay(columnDate, now) && now >= startOfDay2 && now <= endOfDay2,
            top: this.dateAdapter.differenceInMinutes(now, startOfDay2) * hourHeightModifier
          };
        }));
      }
      ngOnChanges(changes) {
        if (changes.columnDate) {
          this.columnDate$.next(changes.columnDate.currentValue);
        }
      }
      static {
        this.\u0275fac = function CalendarWeekViewCurrentTimeMarkerComponent_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _CalendarWeekViewCurrentTimeMarkerComponent)();
        };
      }
      static {
        this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
          type: _CalendarWeekViewCurrentTimeMarkerComponent,
          selectors: [["mwl-calendar-week-view-current-time-marker"]],
          inputs: {
            columnDate: "columnDate",
            dayStartHour: "dayStartHour",
            dayStartMinute: "dayStartMinute",
            dayEndHour: "dayEndHour",
            dayEndMinute: "dayEndMinute",
            hourSegments: "hourSegments",
            hourDuration: "hourDuration",
            hourSegmentHeight: "hourSegmentHeight",
            customTemplate: "customTemplate"
          },
          features: [\u0275\u0275NgOnChangesFeature],
          decls: 5,
          vars: 14,
          consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-current-time-marker", 3, "top"], [1, "cal-current-time-marker"]],
          template: function CalendarWeekViewCurrentTimeMarkerComponent_Template(rf, ctx) {
            if (rf & 1) {
              \u0275\u0275template(0, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(2, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
              \u0275\u0275pipe(3, "async");
              \u0275\u0275pipe(4, "async");
            }
            if (rf & 2) {
              let tmp_2_0;
              const defaultTemplate_r3 = \u0275\u0275reference(1);
              \u0275\u0275advance(2);
              \u0275\u0275property("ngTemplateOutlet", ctx.customTemplate || defaultTemplate_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction7(6, _c19, ctx.columnDate, ctx.dayStartHour, ctx.dayStartMinute, ctx.dayEndHour, ctx.dayEndMinute, (tmp_2_0 = \u0275\u0275pipeBind1(3, 2, ctx.marker$)) == null ? null : tmp_2_0.isVisible, (tmp_2_0 = \u0275\u0275pipeBind1(4, 4, ctx.marker$)) == null ? null : tmp_2_0.top));
            }
          },
          dependencies: [NgTemplateOutlet, AsyncPipe],
          encapsulation: 2
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarWeekViewCurrentTimeMarkerComponent, [{
        type: Component,
        args: [{
          selector: "mwl-calendar-week-view-current-time-marker",
          template: `
    <ng-template
      #defaultTemplate
      let-columnDate="columnDate"
      let-dayStartHour="dayStartHour"
      let-dayStartMinute="dayStartMinute"
      let-dayEndHour="dayEndHour"
      let-dayEndMinute="dayEndMinute"
      let-isVisible="isVisible"
      let-topPx="topPx"
    >
      @if (isVisible) {
        <div class="cal-current-time-marker" [style.top.px]="topPx"></div>
      }
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        columnDate: columnDate,
        dayStartHour: dayStartHour,
        dayStartMinute: dayStartMinute,
        dayEndHour: dayEndHour,
        dayEndMinute: dayEndMinute,
        isVisible: (marker$ | async)?.isVisible,
        topPx: (marker$ | async)?.top,
      }"
    />
  `,
          imports: [NgTemplateOutlet, AsyncPipe]
        }]
      }], null, {
        columnDate: [{
          type: Input
        }],
        dayStartHour: [{
          type: Input
        }],
        dayStartMinute: [{
          type: Input
        }],
        dayEndHour: [{
          type: Input
        }],
        dayEndMinute: [{
          type: Input
        }],
        hourSegments: [{
          type: Input
        }],
        hourDuration: [{
          type: Input
        }],
        hourSegmentHeight: [{
          type: Input
        }],
        customTemplate: [{
          type: Input
        }]
      });
    })();
    CalendarWeekViewComponent = class _CalendarWeekViewComponent {
      constructor() {
        this.events = [];
        this.excludeDays = [];
        this.locale = inject(LOCALE_ID);
        this.tooltipPlacement = "auto";
        this.tooltipAppendToBody = true;
        this.tooltipDelay = null;
        this.precision = "days";
        this.snapDraggedEvents = true;
        this.hourSegments = 2;
        this.hourSegmentHeight = 30;
        this.minimumEventHeight = 30;
        this.dayStartHour = 0;
        this.dayStartMinute = 0;
        this.dayEndHour = 23;
        this.dayEndMinute = 59;
        this.dayHeaderClicked = new EventEmitter();
        this.eventClicked = new EventEmitter();
        this.eventTimesChanged = new EventEmitter();
        this.beforeViewRender = new EventEmitter();
        this.hourSegmentClicked = new EventEmitter();
        this.allDayEventResizes = /* @__PURE__ */ new Map();
        this.timeEventResizes = /* @__PURE__ */ new Map();
        this.eventDragEnterByType = {
          allDay: 0,
          time: 0
        };
        this.dragActive = false;
        this.dragAlreadyMoved = false;
        this.calendarId = Symbol("angular calendar week view id");
        this.rtl = false;
        this.cdr = inject(ChangeDetectorRef);
        this.utils = inject(CalendarUtils);
        this.dateAdapter = inject(DateAdapter);
        this.element = inject(ElementRef);
      }
      /**
       * @hidden
       */
      ngOnInit() {
        if (this.refresh) {
          this.refreshSubscription = this.refresh.subscribe(() => {
            this.refreshAll();
            this.cdr.markForCheck();
          });
        }
      }
      /**
       * @hidden
       */
      ngOnChanges(changes) {
        const refreshHeader = changes.viewDate || changes.excludeDays || changes.weekendDays || changes.daysInWeek || changes.weekStartsOn;
        const refreshBody = changes.viewDate || changes.dayStartHour || changes.dayStartMinute || changes.dayEndHour || changes.dayEndMinute || changes.hourSegments || changes.hourDuration || changes.weekStartsOn || changes.weekendDays || changes.excludeDays || changes.hourSegmentHeight || changes.events || changes.daysInWeek || changes.minimumEventHeight;
        if (refreshHeader) {
          this.refreshHeader();
        }
        if (changes.events) {
          validateEvents2(this.events);
        }
        if (refreshBody) {
          this.refreshBody();
        }
        if (refreshHeader || refreshBody) {
          this.emitBeforeViewRender();
        }
      }
      /**
       * @hidden
       */
      ngOnDestroy() {
        if (this.refreshSubscription) {
          this.refreshSubscription.unsubscribe();
        }
      }
      /**
       * @hidden
       */
      ngAfterViewInit() {
        this.rtl = typeof window !== "undefined" && getComputedStyle(this.element.nativeElement).direction === "rtl";
        this.cdr.detectChanges();
      }
      /**
       * @hidden
       */
      timeEventResizeStarted(eventsContainer, timeEvent, resizeEvent) {
        this.timeEventResizes.set(timeEvent.event, resizeEvent);
        this.resizeStarted(eventsContainer, timeEvent);
      }
      /**
       * @hidden
       */
      timeEventResizing(timeEvent, resizeEvent) {
        this.timeEventResizes.set(timeEvent.event, resizeEvent);
        const adjustedEvents = /* @__PURE__ */ new Map();
        const tempEvents = [...this.events];
        this.timeEventResizes.forEach((lastResizeEvent, event) => {
          const newEventDates = this.getTimeEventResizedDates(event, lastResizeEvent);
          const adjustedEvent = __spreadValues(__spreadValues({}, event), newEventDates);
          adjustedEvents.set(adjustedEvent, event);
          const eventIndex = tempEvents.indexOf(event);
          tempEvents[eventIndex] = adjustedEvent;
        });
        this.restoreOriginalEvents(tempEvents, adjustedEvents, true);
      }
      /**
       * @hidden
       */
      timeEventResizeEnded(timeEvent) {
        this.view = this.getWeekView(this.events);
        const lastResizeEvent = this.timeEventResizes.get(timeEvent.event);
        if (lastResizeEvent) {
          this.timeEventResizes.delete(timeEvent.event);
          const newEventDates = this.getTimeEventResizedDates(timeEvent.event, lastResizeEvent);
          this.eventTimesChanged.emit({
            newStart: newEventDates.start,
            newEnd: newEventDates.end,
            event: timeEvent.event,
            type: CalendarEventTimesChangedEventType.Resize
          });
        }
      }
      /**
       * @hidden
       */
      allDayEventResizeStarted(allDayEventsContainer, allDayEvent, resizeEvent) {
        this.allDayEventResizes.set(allDayEvent, {
          originalOffset: allDayEvent.offset,
          originalSpan: allDayEvent.span,
          edge: typeof resizeEvent.edges.left !== "undefined" ? "left" : "right"
        });
        this.resizeStarted(allDayEventsContainer, allDayEvent, this.getDayColumnWidth(allDayEventsContainer));
      }
      /**
       * @hidden
       */
      allDayEventResizing(allDayEvent, resizeEvent, dayWidth) {
        const currentResize = this.allDayEventResizes.get(allDayEvent);
        const modifier = this.rtl ? -1 : 1;
        if (typeof resizeEvent.edges.left !== "undefined") {
          const diff = Math.round(+resizeEvent.edges.left / dayWidth) * modifier;
          allDayEvent.offset = currentResize.originalOffset + diff;
          allDayEvent.span = currentResize.originalSpan - diff;
        } else if (typeof resizeEvent.edges.right !== "undefined") {
          const diff = Math.round(+resizeEvent.edges.right / dayWidth) * modifier;
          allDayEvent.span = currentResize.originalSpan + diff;
        }
      }
      /**
       * @hidden
       */
      allDayEventResizeEnded(allDayEvent) {
        const currentResize = this.allDayEventResizes.get(allDayEvent);
        if (currentResize) {
          const allDayEventResizingBeforeStart = currentResize.edge === "left";
          let daysDiff;
          if (allDayEventResizingBeforeStart) {
            daysDiff = allDayEvent.offset - currentResize.originalOffset;
          } else {
            daysDiff = allDayEvent.span - currentResize.originalSpan;
          }
          allDayEvent.offset = currentResize.originalOffset;
          allDayEvent.span = currentResize.originalSpan;
          const newDates = this.getAllDayEventResizedDates(allDayEvent.event, daysDiff, allDayEventResizingBeforeStart);
          this.eventTimesChanged.emit({
            newStart: newDates.start,
            newEnd: newDates.end,
            event: allDayEvent.event,
            type: CalendarEventTimesChangedEventType.Resize
          });
          this.allDayEventResizes.delete(allDayEvent);
        }
      }
      /**
       * @hidden
       */
      getDayColumnWidth(eventRowContainer) {
        return Math.floor(eventRowContainer.offsetWidth / this.days.length);
      }
      /**
       * @hidden
       */
      dateDragEnter(date) {
        this.lastDragEnterDate = date;
      }
      /**
       * @hidden
       */
      eventDropped(dropEvent, date, allDay) {
        if (shouldFireDroppedEvent(dropEvent, date, allDay, this.calendarId) && this.lastDragEnterDate.getTime() === date.getTime() && (!this.snapDraggedEvents || dropEvent.dropData.event !== this.lastDraggedEvent)) {
          this.eventTimesChanged.emit({
            type: CalendarEventTimesChangedEventType.Drop,
            event: dropEvent.dropData.event,
            newStart: date,
            allDay
          });
        }
        this.lastDraggedEvent = null;
      }
      /**
       * @hidden
       */
      dragEnter(type) {
        this.eventDragEnterByType[type]++;
      }
      /**
       * @hidden
       */
      dragLeave(type) {
        this.eventDragEnterByType[type]--;
      }
      /**
       * @hidden
       */
      dragStarted(eventsContainerElement, eventElement, event, useY) {
        this.dayColumnWidth = this.getDayColumnWidth(eventsContainerElement);
        const dragHelper = new CalendarDragHelper(eventsContainerElement, eventElement);
        this.validateDrag = ({
          x,
          y,
          transform
        }) => {
          const isAllowed = this.allDayEventResizes.size === 0 && this.timeEventResizes.size === 0 && dragHelper.validateDrag({
            x,
            y,
            snapDraggedEvents: this.snapDraggedEvents,
            dragAlreadyMoved: this.dragAlreadyMoved,
            transform
          });
          if (isAllowed && this.validateEventTimesChanged) {
            const newEventTimes = this.getDragMovedEventTimes(event, {
              x,
              y
            }, this.dayColumnWidth, useY);
            return this.validateEventTimesChanged({
              type: CalendarEventTimesChangedEventType.Drag,
              event: event.event,
              newStart: newEventTimes.start,
              newEnd: newEventTimes.end
            });
          }
          return isAllowed;
        };
        this.dragActive = true;
        this.dragAlreadyMoved = false;
        this.lastDraggedEvent = null;
        this.eventDragEnterByType = {
          allDay: 0,
          time: 0
        };
        if (!this.snapDraggedEvents && useY) {
          this.view.hourColumns.forEach((column) => {
            const linkedEvent = column.events.find((columnEvent) => columnEvent.event === event.event && columnEvent !== event);
            if (linkedEvent) {
              linkedEvent.width = 0;
              linkedEvent.height = 0;
            }
          });
        }
        this.cdr.markForCheck();
      }
      /**
       * @hidden
       */
      dragMove(dayEvent, dragEvent) {
        const newEventTimes = this.getDragMovedEventTimes(dayEvent, dragEvent, this.dayColumnWidth, true);
        const originalEvent = dayEvent.event;
        const adjustedEvent = __spreadValues(__spreadValues({}, originalEvent), newEventTimes);
        const tempEvents = this.events.map((event) => {
          if (event === originalEvent) {
            return adjustedEvent;
          }
          return event;
        });
        this.restoreOriginalEvents(tempEvents, /* @__PURE__ */ new Map([[adjustedEvent, originalEvent]]), this.snapDraggedEvents);
        this.dragAlreadyMoved = true;
      }
      /**
       * @hidden
       */
      allDayEventDragMove() {
        this.dragAlreadyMoved = true;
      }
      /**
       * @hidden
       */
      dragEnded(weekEvent, dragEndEvent, dayWidth, useY = false) {
        this.view = this.getWeekView(this.events);
        this.dragActive = false;
        this.validateDrag = null;
        const {
          start,
          end
        } = this.getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY);
        if ((this.snapDraggedEvents || this.eventDragEnterByType[useY ? "time" : "allDay"] > 0) && isDraggedWithinPeriod(start, end, this.view.period)) {
          this.lastDraggedEvent = weekEvent.event;
          this.eventTimesChanged.emit({
            newStart: start,
            newEnd: end,
            event: weekEvent.event,
            type: CalendarEventTimesChangedEventType.Drag,
            allDay: !useY
          });
        }
      }
      refreshHeader() {
        this.days = this.utils.getWeekViewHeader(__spreadValues({
          viewDate: this.viewDate,
          weekStartsOn: this.weekStartsOn,
          excluded: this.excludeDays,
          weekendDays: this.weekendDays
        }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
      }
      refreshBody() {
        this.view = this.getWeekView(this.events);
      }
      refreshAll() {
        this.refreshHeader();
        this.refreshBody();
        this.emitBeforeViewRender();
      }
      emitBeforeViewRender() {
        if (this.days && this.view) {
          this.beforeViewRender.emit(__spreadValues({
            header: this.days
          }, this.view));
        }
      }
      getWeekView(events) {
        return this.utils.getWeekView(__spreadValues({
          events,
          viewDate: this.viewDate,
          weekStartsOn: this.weekStartsOn,
          excluded: this.excludeDays,
          precision: this.precision,
          absolutePositionedEvents: true,
          hourSegments: this.hourSegments,
          hourDuration: this.hourDuration,
          dayStart: {
            hour: this.dayStartHour,
            minute: this.dayStartMinute
          },
          dayEnd: {
            hour: this.dayEndHour,
            minute: this.dayEndMinute
          },
          segmentHeight: this.hourSegmentHeight,
          weekendDays: this.weekendDays,
          minimumEventHeight: this.minimumEventHeight
        }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
      }
      getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY) {
        const daysDragged = roundToNearest(dragEndEvent.x, dayWidth) / dayWidth * (this.rtl ? -1 : 1);
        const minutesMoved = useY ? getMinutesMoved(dragEndEvent.y, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize, this.hourDuration) : 0;
        const start = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.start, daysDragged, this.excludeDays), minutesMoved);
        let end;
        if (weekEvent.event.end) {
          end = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.end, daysDragged, this.excludeDays), minutesMoved);
        }
        return {
          start,
          end
        };
      }
      restoreOriginalEvents(tempEvents, adjustedEvents, snapDraggedEvents = true) {
        const previousView = this.view;
        if (snapDraggedEvents) {
          this.view = this.getWeekView(tempEvents);
        }
        const adjustedEventsArray = tempEvents.filter((event) => adjustedEvents.has(event));
        this.view.hourColumns.forEach((column, columnIndex) => {
          previousView.hourColumns[columnIndex].hours.forEach((hour, hourIndex) => {
            hour.segments.forEach((segment, segmentIndex) => {
              column.hours[hourIndex].segments[segmentIndex].cssClass = segment.cssClass;
            });
          });
          adjustedEventsArray.forEach((adjustedEvent) => {
            const originalEvent = adjustedEvents.get(adjustedEvent);
            const existingColumnEvent = column.events.find((columnEvent) => columnEvent.event === (snapDraggedEvents ? adjustedEvent : originalEvent));
            if (existingColumnEvent) {
              existingColumnEvent.event = originalEvent;
              existingColumnEvent["tempEvent"] = adjustedEvent;
              if (!snapDraggedEvents) {
                existingColumnEvent.height = 0;
                existingColumnEvent.width = 0;
              }
            } else {
              const event = {
                event: originalEvent,
                left: 0,
                top: 0,
                height: 0,
                width: 0,
                startsBeforeDay: false,
                endsAfterDay: false,
                tempEvent: adjustedEvent
              };
              column.events.push(event);
            }
          });
        });
        adjustedEvents.clear();
      }
      getTimeEventResizedDates(calendarEvent, resizeEvent) {
        const newEventDates = {
          start: calendarEvent.start,
          end: getDefaultEventEnd(this.dateAdapter, calendarEvent, this.minimumEventHeight)
        };
        const _a = calendarEvent, {
          end
        } = _a, eventWithoutEnd = __objRest(_a, [
          "end"
        ]);
        const smallestResizes = {
          start: this.dateAdapter.addMinutes(newEventDates.end, this.minimumEventHeight * -1),
          end: getDefaultEventEnd(this.dateAdapter, eventWithoutEnd, this.minimumEventHeight)
        };
        const modifier = this.rtl ? -1 : 1;
        if (typeof resizeEvent.edges.left !== "undefined") {
          const daysDiff = Math.round(+resizeEvent.edges.left / this.dayColumnWidth) * modifier;
          const newStart = addDaysWithExclusions(this.dateAdapter, newEventDates.start, daysDiff, this.excludeDays);
          if (newStart < smallestResizes.start) {
            newEventDates.start = newStart;
          } else {
            newEventDates.start = smallestResizes.start;
          }
        } else if (typeof resizeEvent.edges.right !== "undefined") {
          const daysDiff = Math.round(+resizeEvent.edges.right / this.dayColumnWidth) * modifier;
          const newEnd = addDaysWithExclusions(this.dateAdapter, newEventDates.end, daysDiff, this.excludeDays);
          if (newEnd > smallestResizes.end) {
            newEventDates.end = newEnd;
          } else {
            newEventDates.end = smallestResizes.end;
          }
        }
        if (typeof resizeEvent.edges.top !== "undefined") {
          const minutesMoved = getMinutesMoved(resizeEvent.edges.top, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize, this.hourDuration);
          const newStart = this.dateAdapter.addMinutes(newEventDates.start, minutesMoved);
          if (newStart < smallestResizes.start) {
            newEventDates.start = newStart;
          } else {
            newEventDates.start = smallestResizes.start;
          }
        } else if (typeof resizeEvent.edges.bottom !== "undefined") {
          const minutesMoved = getMinutesMoved(resizeEvent.edges.bottom, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize, this.hourDuration);
          const newEnd = this.dateAdapter.addMinutes(newEventDates.end, minutesMoved);
          if (newEnd > smallestResizes.end) {
            newEventDates.end = newEnd;
          } else {
            newEventDates.end = smallestResizes.end;
          }
        }
        return newEventDates;
      }
      resizeStarted(eventsContainer, event, dayWidth) {
        this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
        const resizeHelper = new CalendarResizeHelper(eventsContainer, dayWidth, this.rtl);
        this.validateResize = ({
          rectangle,
          edges
        }) => {
          const isWithinBoundary = resizeHelper.validateResize({
            rectangle: __spreadValues({}, rectangle),
            edges
          });
          if (isWithinBoundary && this.validateEventTimesChanged) {
            let newEventDates;
            if (!dayWidth) {
              newEventDates = this.getTimeEventResizedDates(event.event, {
                rectangle,
                edges
              });
            } else {
              const modifier = this.rtl ? -1 : 1;
              if (typeof edges.left !== "undefined") {
                const diff = Math.round(+edges.left / dayWidth) * modifier;
                newEventDates = this.getAllDayEventResizedDates(event.event, diff, !this.rtl);
              } else {
                const diff = Math.round(+edges.right / dayWidth) * modifier;
                newEventDates = this.getAllDayEventResizedDates(event.event, diff, this.rtl);
              }
            }
            return this.validateEventTimesChanged({
              type: CalendarEventTimesChangedEventType.Resize,
              event: event.event,
              newStart: newEventDates.start,
              newEnd: newEventDates.end
            });
          }
          return isWithinBoundary;
        };
        this.cdr.markForCheck();
      }
      /**
       * @hidden
       */
      getAllDayEventResizedDates(event, daysDiff, beforeStart) {
        let start = event.start;
        let end = event.end || event.start;
        if (beforeStart) {
          start = addDaysWithExclusions(this.dateAdapter, start, daysDiff, this.excludeDays);
        } else {
          end = addDaysWithExclusions(this.dateAdapter, end, daysDiff, this.excludeDays);
        }
        return {
          start,
          end
        };
      }
      static {
        this.\u0275fac = function CalendarWeekViewComponent_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _CalendarWeekViewComponent)();
        };
      }
      static {
        this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
          type: _CalendarWeekViewComponent,
          selectors: [["mwl-calendar-week-view"]],
          inputs: {
            viewDate: "viewDate",
            events: "events",
            excludeDays: "excludeDays",
            refresh: "refresh",
            locale: "locale",
            tooltipPlacement: "tooltipPlacement",
            tooltipTemplate: "tooltipTemplate",
            tooltipAppendToBody: "tooltipAppendToBody",
            tooltipDelay: "tooltipDelay",
            weekStartsOn: "weekStartsOn",
            headerTemplate: "headerTemplate",
            eventTemplate: "eventTemplate",
            eventTitleTemplate: "eventTitleTemplate",
            eventActionsTemplate: "eventActionsTemplate",
            precision: "precision",
            weekendDays: "weekendDays",
            snapDraggedEvents: "snapDraggedEvents",
            hourSegments: "hourSegments",
            hourDuration: "hourDuration",
            hourSegmentHeight: "hourSegmentHeight",
            minimumEventHeight: "minimumEventHeight",
            dayStartHour: "dayStartHour",
            dayStartMinute: "dayStartMinute",
            dayEndHour: "dayEndHour",
            dayEndMinute: "dayEndMinute",
            hourSegmentTemplate: "hourSegmentTemplate",
            eventSnapSize: "eventSnapSize",
            allDayEventsLabelTemplate: "allDayEventsLabelTemplate",
            daysInWeek: "daysInWeek",
            currentTimeMarkerTemplate: "currentTimeMarkerTemplate",
            validateEventTimesChanged: "validateEventTimesChanged",
            resizeCursors: "resizeCursors"
          },
          outputs: {
            dayHeaderClicked: "dayHeaderClicked",
            eventClicked: "eventClicked",
            eventTimesChanged: "eventTimesChanged",
            beforeViewRender: "beforeViewRender",
            hourSegmentClicked: "hourSegmentClicked"
          },
          features: [\u0275\u0275NgOnChangesFeature],
          decls: 9,
          vars: 7,
          consts: [["dayColumns", ""], ["allDayEventsContainer", ""], ["eventRowContainer", ""], ["event", ""], ["weekEventTemplate", ""], ["role", "grid", 1, "cal-week-view"], [3, "dayHeaderClicked", "eventDropped", "dragEnter", "days", "locale", "customTemplate"], ["mwlDroppable", "", 1, "cal-all-day-events"], ["mwlDroppable", "", 1, "cal-time-events", 3, "dragEnter", "dragLeave"], [1, "cal-time-label-column"], [1, "cal-day-columns"], [1, "cal-day-column"], ["mwlDroppable", "", 1, "cal-all-day-events", 3, "dragEnter", "dragLeave"], [4, "ngTemplateOutlet"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 1, "cal-day-column"], [1, "cal-events-row"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 1, "cal-day-column", 3, "drop", "dragEnter"], ["mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event-container", 3, "cal-draggable", "cal-starts-within-week", "cal-ends-within-week", "ngClass", "width", "marginLeft", "marginRight", "resizeCursors", "resizeSnapGrid", "validateResize", "dropData", "dragAxis", "dragSnapGrid", "validateDrag", "touchStartLongPress"], ["mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event-container", 3, "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd", "ngClass", "resizeCursors", "resizeSnapGrid", "validateResize", "dropData", "dragAxis", "dragSnapGrid", "validateDrag", "touchStartLongPress"], ["mwlResizeHandle", "", 1, "cal-resize-handle", "cal-resize-handle-before-start", 3, "resizeEdges"], [3, "eventClicked", "locale", "weekEvent", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "daysInWeek"], ["mwlResizeHandle", "", 1, "cal-resize-handle", "cal-resize-handle-after-end", 3, "resizeEdges"], [1, "cal-hour", 3, "cal-hour-odd"], [1, "cal-hour"], [3, "height", "segment", "segmentHeight", "locale", "customTemplate", "isTimeLabel", "daysInWeek"], [3, "segment", "segmentHeight", "locale", "customTemplate", "isTimeLabel", "daysInWeek"], [3, "columnDate", "dayStartHour", "dayStartMinute", "dayEndHour", "dayEndMinute", "hourSegments", "hourDuration", "hourSegmentHeight", "customTemplate"], [1, "cal-events-container"], ["mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event-container", 3, "cal-draggable", "cal-starts-within-day", "cal-ends-within-day", "ngClass", "hidden", "top", "height", "left", "width", "resizeCursors", "resizeSnapGrid", "validateResize", "allowNegativeResizes", "dropData", "dragAxis", "dragSnapGrid", "touchStartLongPress", "ghostDragEnabled", "ghostElementTemplate", "validateDrag"], ["mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event-container", 3, "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd", "ngClass", "hidden", "resizeCursors", "resizeSnapGrid", "validateResize", "allowNegativeResizes", "dropData", "dragAxis", "dragSnapGrid", "touchStartLongPress", "ghostDragEnabled", "ghostElementTemplate", "validateDrag"], [3, "ngTemplateOutlet"], [3, "eventClicked", "locale", "weekEvent", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDisabled", "tooltipDelay", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "column", "daysInWeek"], ["mwlDroppable", "", "dragActiveClass", "cal-drag-active", 3, "height", "segment", "segmentHeight", "locale", "customTemplate", "daysInWeek", "clickListenerDisabled", "dragOverClass", "isTimeLabel"], ["mwlDroppable", "", "dragActiveClass", "cal-drag-active", 3, "mwlClick", "drop", "dragEnter", "segment", "segmentHeight", "locale", "customTemplate", "daysInWeek", "clickListenerDisabled", "dragOverClass", "isTimeLabel"]],
          template: function CalendarWeekViewComponent_Template(rf, ctx) {
            if (rf & 1) {
              const _r1 = \u0275\u0275getCurrentView();
              \u0275\u0275elementStart(0, "div", 5)(1, "mwl-calendar-week-view-header", 6);
              \u0275\u0275listener("dayHeaderClicked", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_dayHeaderClicked_1_listener($event) {
                \u0275\u0275restoreView(_r1);
                return \u0275\u0275resetView(ctx.dayHeaderClicked.emit($event));
              })("eventDropped", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_eventDropped_1_listener($event) {
                \u0275\u0275restoreView(_r1);
                return \u0275\u0275resetView(ctx.eventDropped({
                  dropData: $event
                }, $event.newStart, true));
              })("dragEnter", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_dragEnter_1_listener($event) {
                \u0275\u0275restoreView(_r1);
                return \u0275\u0275resetView(ctx.dateDragEnter($event.date));
              });
              \u0275\u0275elementEnd();
              \u0275\u0275conditionalCreate(2, CalendarWeekViewComponent_Conditional_2_Template, 9, 1, "div", 7);
              \u0275\u0275elementStart(3, "div", 8);
              \u0275\u0275listener("dragEnter", function CalendarWeekViewComponent_Template_div_dragEnter_3_listener() {
                \u0275\u0275restoreView(_r1);
                return \u0275\u0275resetView(ctx.dragEnter("time"));
              })("dragLeave", function CalendarWeekViewComponent_Template_div_dragLeave_3_listener() {
                \u0275\u0275restoreView(_r1);
                return \u0275\u0275resetView(ctx.dragLeave("time"));
              });
              \u0275\u0275conditionalCreate(4, CalendarWeekViewComponent_Conditional_4_Template, 3, 0, "div", 9);
              \u0275\u0275elementStart(5, "div", 10, 0);
              \u0275\u0275repeaterCreate(7, CalendarWeekViewComponent_For_8_Template, 7, 9, "div", 11, _forTrack2);
              \u0275\u0275elementEnd()()();
            }
            if (rf & 2) {
              \u0275\u0275advance();
              \u0275\u0275property("days", ctx.days)("locale", ctx.locale)("customTemplate", ctx.headerTemplate);
              \u0275\u0275advance();
              \u0275\u0275conditional(ctx.view.allDayEventRows.length > 0 ? 2 : -1);
              \u0275\u0275advance(2);
              \u0275\u0275conditional(ctx.view.hourColumns.length > 0 && ctx.daysInWeek !== 1 ? 4 : -1);
              \u0275\u0275advance();
              \u0275\u0275classProp("cal-resize-active", ctx.timeEventResizes.size > 0);
              \u0275\u0275advance(2);
              \u0275\u0275repeater(ctx.view.hourColumns);
            }
          },
          dependencies: [CalendarWeekViewHeaderComponent, DroppableDirective, NgTemplateOutlet, ResizableDirective, DraggableDirective, NgClass, ResizeHandleDirective, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent, ClickDirective],
          encapsulation: 2
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarWeekViewComponent, [{
        type: Component,
        args: [{
          selector: "mwl-calendar-week-view",
          template: `
    <div class="cal-week-view" role="grid">
      <mwl-calendar-week-view-header
        [days]="days"
        [locale]="locale"
        [customTemplate]="headerTemplate"
        (dayHeaderClicked)="dayHeaderClicked.emit($event)"
        (eventDropped)="
          eventDropped({ dropData: $event }, $event.newStart, true)
        "
        (dragEnter)="dateDragEnter($event.date)"
      />
      @if (view.allDayEventRows.length > 0) {
        <div
          class="cal-all-day-events"
          #allDayEventsContainer
          mwlDroppable
          (dragEnter)="dragEnter('allDay')"
          (dragLeave)="dragLeave('allDay')"
        >
          <div class="cal-day-columns">
            <div class="cal-time-label-column">
              <ng-container *ngTemplateOutlet="allDayEventsLabelTemplate" />
            </div>
            @for (day of days; track day.date.toISOString()) {
              <div
                class="cal-day-column"
                mwlDroppable
                dragOverClass="cal-drag-over"
                (drop)="eventDropped($event, day.date, true)"
                (dragEnter)="dateDragEnter(day.date)"
              ></div>
            }
          </div>
          @for (eventRow of view.allDayEventRows; track eventRow.id) {
            <div #eventRowContainer class="cal-events-row">
              @for (
                allDayEvent of eventRow.row;
                track allDayEvent.event.id ?? allDayEvent.event
              ) {
                <div
                  #event
                  class="cal-event-container"
                  [class.cal-draggable]="
                    allDayEvent.event.draggable && allDayEventResizes.size === 0
                  "
                  [class.cal-starts-within-week]="!allDayEvent.startsBeforeWeek"
                  [class.cal-ends-within-week]="!allDayEvent.endsAfterWeek"
                  [ngClass]="allDayEvent.event?.cssClass"
                  [style.width.%]="(100 / days.length) * allDayEvent.span"
                  [style.marginLeft.%]="
                    rtl ? null : (100 / days.length) * allDayEvent.offset
                  "
                  [style.marginRight.%]="
                    rtl ? (100 / days.length) * allDayEvent.offset : null
                  "
                  mwlResizable
                  [resizeCursors]="resizeCursors"
                  [resizeSnapGrid]="{
                    left: dayColumnWidth,
                    right: dayColumnWidth,
                  }"
                  [validateResize]="validateResize"
                  (resizeStart)="
                    allDayEventResizeStarted(
                      eventRowContainer,
                      allDayEvent,
                      $event
                    )
                  "
                  (resizing)="
                    allDayEventResizing(allDayEvent, $event, dayColumnWidth)
                  "
                  (resizeEnd)="allDayEventResizeEnded(allDayEvent)"
                  mwlDraggable
                  dragActiveClass="cal-drag-active"
                  [dropData]="{
                    event: allDayEvent.event,
                    calendarId: calendarId,
                  }"
                  [dragAxis]="{
                    x:
                      allDayEvent.event.draggable &&
                      allDayEventResizes.size === 0,
                    y:
                      !snapDraggedEvents &&
                      allDayEvent.event.draggable &&
                      allDayEventResizes.size === 0,
                  }"
                  [dragSnapGrid]="
                    snapDraggedEvents ? { x: dayColumnWidth } : {}
                  "
                  [validateDrag]="validateDrag"
                  [touchStartLongPress]="{ delay: 300, delta: 30 }"
                  (dragStart)="
                    dragStarted(eventRowContainer, event, allDayEvent, false)
                  "
                  (dragging)="allDayEventDragMove()"
                  (dragEnd)="dragEnded(allDayEvent, $event, dayColumnWidth)"
                >
                  @if (
                    allDayEvent.event?.resizable?.beforeStart &&
                    !allDayEvent.startsBeforeWeek
                  ) {
                    <div
                      class="cal-resize-handle cal-resize-handle-before-start"
                      mwlResizeHandle
                      [resizeEdges]="{ left: true }"
                    ></div>
                  }
                  <mwl-calendar-week-view-event
                    [locale]="locale"
                    [weekEvent]="allDayEvent"
                    [tooltipPlacement]="tooltipPlacement"
                    [tooltipTemplate]="tooltipTemplate"
                    [tooltipAppendToBody]="tooltipAppendToBody"
                    [tooltipDelay]="tooltipDelay"
                    [customTemplate]="eventTemplate"
                    [eventTitleTemplate]="eventTitleTemplate"
                    [eventActionsTemplate]="eventActionsTemplate"
                    [daysInWeek]="daysInWeek"
                    (eventClicked)="
                      eventClicked.emit({
                        event: allDayEvent.event,
                        sourceEvent: $event.sourceEvent,
                      })
                    "
                  />
                  @if (
                    allDayEvent.event?.resizable?.afterEnd &&
                    !allDayEvent.endsAfterWeek
                  ) {
                    <div
                      class="cal-resize-handle cal-resize-handle-after-end"
                      mwlResizeHandle
                      [resizeEdges]="{ right: true }"
                    ></div>
                  }
                </div>
              }
            </div>
          }
        </div>
      }
      <div
        class="cal-time-events"
        mwlDroppable
        (dragEnter)="dragEnter('time')"
        (dragLeave)="dragLeave('time')"
      >
        @if (view.hourColumns.length > 0 && daysInWeek !== 1) {
          <div class="cal-time-label-column">
            @for (
              hour of view.hourColumns[0].hours;
              track hour.segments[0].date.toISOString();
              let odd = $odd
            ) {
              <div class="cal-hour" [class.cal-hour-odd]="odd">
                @for (
                  segment of hour.segments;
                  track segment.date.toISOString()
                ) {
                  <mwl-calendar-week-view-hour-segment
                    [style.height.px]="hourSegmentHeight"
                    [segment]="segment"
                    [segmentHeight]="hourSegmentHeight"
                    [locale]="locale"
                    [customTemplate]="hourSegmentTemplate"
                    [isTimeLabel]="true"
                    [daysInWeek]="daysInWeek"
                  />
                }
              </div>
            }
          </div>
        }
        <div
          class="cal-day-columns"
          [class.cal-resize-active]="timeEventResizes.size > 0"
          #dayColumns
        >
          @for (
            column of view.hourColumns;
            track column.hours[0]
              ? column.hours[0].segments[0].date.toISOString()
              : column
          ) {
            <div class="cal-day-column">
              <mwl-calendar-week-view-current-time-marker
                [columnDate]="column.date"
                [dayStartHour]="dayStartHour"
                [dayStartMinute]="dayStartMinute"
                [dayEndHour]="dayEndHour"
                [dayEndMinute]="dayEndMinute"
                [hourSegments]="hourSegments"
                [hourDuration]="hourDuration"
                [hourSegmentHeight]="hourSegmentHeight"
                [customTemplate]="currentTimeMarkerTemplate"
              />
              <div class="cal-events-container">
                @for (
                  timeEvent of column.events;
                  track timeEvent.event.id ?? timeEvent.event
                ) {
                  <div
                    #event
                    class="cal-event-container"
                    [class.cal-draggable]="
                      timeEvent.event.draggable && timeEventResizes.size === 0
                    "
                    [class.cal-starts-within-day]="!timeEvent.startsBeforeDay"
                    [class.cal-ends-within-day]="!timeEvent.endsAfterDay"
                    [ngClass]="timeEvent.event.cssClass"
                    [hidden]="timeEvent.height === 0 && timeEvent.width === 0"
                    [style.top.px]="timeEvent.top"
                    [style.height.px]="timeEvent.height"
                    [style.left.%]="timeEvent.left"
                    [style.width.%]="timeEvent.width"
                    mwlResizable
                    [resizeCursors]="resizeCursors"
                    [resizeSnapGrid]="{
                      left: dayColumnWidth,
                      right: dayColumnWidth,
                      top: eventSnapSize || hourSegmentHeight,
                      bottom: eventSnapSize || hourSegmentHeight,
                    }"
                    [validateResize]="validateResize"
                    [allowNegativeResizes]="true"
                    (resizeStart)="
                      timeEventResizeStarted(dayColumns, timeEvent, $event)
                    "
                    (resizing)="timeEventResizing(timeEvent, $event)"
                    (resizeEnd)="timeEventResizeEnded(timeEvent)"
                    mwlDraggable
                    dragActiveClass="cal-drag-active"
                    [dropData]="{
                      event: timeEvent.event,
                      calendarId: calendarId,
                    }"
                    [dragAxis]="{
                      x:
                        timeEvent.event.draggable &&
                        timeEventResizes.size === 0,
                      y:
                        timeEvent.event.draggable &&
                        timeEventResizes.size === 0,
                    }"
                    [dragSnapGrid]="
                      snapDraggedEvents
                        ? {
                            x: dayColumnWidth,
                            y: eventSnapSize || hourSegmentHeight,
                          }
                        : {}
                    "
                    [touchStartLongPress]="{ delay: 300, delta: 30 }"
                    [ghostDragEnabled]="!snapDraggedEvents"
                    [ghostElementTemplate]="weekEventTemplate"
                    [validateDrag]="validateDrag"
                    (dragStart)="
                      dragStarted(dayColumns, event, timeEvent, true)
                    "
                    (dragging)="dragMove(timeEvent, $event)"
                    (dragEnd)="
                      dragEnded(timeEvent, $event, dayColumnWidth, true)
                    "
                  >
                    @if (
                      timeEvent.event?.resizable?.beforeStart &&
                      !timeEvent.startsBeforeDay
                    ) {
                      <div
                        class="cal-resize-handle cal-resize-handle-before-start"
                        mwlResizeHandle
                        [resizeEdges]="{
                          left: true,
                          top: true,
                        }"
                      ></div>
                    }
                    <ng-template [ngTemplateOutlet]="weekEventTemplate" />
                    <ng-template #weekEventTemplate>
                      <mwl-calendar-week-view-event
                        [locale]="locale"
                        [weekEvent]="timeEvent"
                        [tooltipPlacement]="tooltipPlacement"
                        [tooltipTemplate]="tooltipTemplate"
                        [tooltipAppendToBody]="tooltipAppendToBody"
                        [tooltipDisabled]="
                          dragActive || timeEventResizes.size > 0
                        "
                        [tooltipDelay]="tooltipDelay"
                        [customTemplate]="eventTemplate"
                        [eventTitleTemplate]="eventTitleTemplate"
                        [eventActionsTemplate]="eventActionsTemplate"
                        [column]="column"
                        [daysInWeek]="daysInWeek"
                        (eventClicked)="
                          eventClicked.emit({
                            event: timeEvent.event,
                            sourceEvent: $event.sourceEvent,
                          })
                        "
                      />
                    </ng-template>
                    @if (
                      timeEvent.event?.resizable?.afterEnd &&
                      !timeEvent.endsAfterDay
                    ) {
                      <div
                        class="cal-resize-handle cal-resize-handle-after-end"
                        mwlResizeHandle
                        [resizeEdges]="{
                          right: true,
                          bottom: true,
                        }"
                      ></div>
                    }
                  </div>
                }
              </div>
              @for (
                hour of column.hours;
                track hour.segments[0].date.toISOString();
                let odd = $odd
              ) {
                <div class="cal-hour" [class.cal-hour-odd]="odd">
                  @for (
                    segment of hour.segments;
                    track segment.date.toISOString()
                  ) {
                    <mwl-calendar-week-view-hour-segment
                      [style.height.px]="hourSegmentHeight"
                      [segment]="segment"
                      [segmentHeight]="hourSegmentHeight"
                      [locale]="locale"
                      [customTemplate]="hourSegmentTemplate"
                      [daysInWeek]="daysInWeek"
                      (mwlClick)="
                        hourSegmentClicked.emit({
                          date: segment.date,
                          sourceEvent: $event,
                        })
                      "
                      [clickListenerDisabled]="!hourSegmentClicked.observed"
                      mwlDroppable
                      [dragOverClass]="
                        !dragActive || !snapDraggedEvents
                          ? 'cal-drag-over'
                          : null
                      "
                      dragActiveClass="cal-drag-active"
                      (drop)="eventDropped($event, segment.date, false)"
                      (dragEnter)="dateDragEnter(segment.date)"
                      [isTimeLabel]="daysInWeek === 1"
                    />
                  }
                </div>
              }
            </div>
          }
        </div>
      </div>
    </div>
  `,
          imports: [CalendarWeekViewHeaderComponent, DroppableDirective, NgTemplateOutlet, ResizableDirective, DraggableDirective, NgClass, ResizeHandleDirective, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent, ClickDirective]
        }]
      }], null, {
        viewDate: [{
          type: Input
        }],
        events: [{
          type: Input
        }],
        excludeDays: [{
          type: Input
        }],
        refresh: [{
          type: Input
        }],
        locale: [{
          type: Input
        }],
        tooltipPlacement: [{
          type: Input
        }],
        tooltipTemplate: [{
          type: Input
        }],
        tooltipAppendToBody: [{
          type: Input
        }],
        tooltipDelay: [{
          type: Input
        }],
        weekStartsOn: [{
          type: Input
        }],
        headerTemplate: [{
          type: Input
        }],
        eventTemplate: [{
          type: Input
        }],
        eventTitleTemplate: [{
          type: Input
        }],
        eventActionsTemplate: [{
          type: Input
        }],
        precision: [{
          type: Input
        }],
        weekendDays: [{
          type: Input
        }],
        snapDraggedEvents: [{
          type: Input
        }],
        hourSegments: [{
          type: Input
        }],
        hourDuration: [{
          type: Input
        }],
        hourSegmentHeight: [{
          type: Input
        }],
        minimumEventHeight: [{
          type: Input
        }],
        dayStartHour: [{
          type: Input
        }],
        dayStartMinute: [{
          type: Input
        }],
        dayEndHour: [{
          type: Input
        }],
        dayEndMinute: [{
          type: Input
        }],
        hourSegmentTemplate: [{
          type: Input
        }],
        eventSnapSize: [{
          type: Input
        }],
        allDayEventsLabelTemplate: [{
          type: Input
        }],
        daysInWeek: [{
          type: Input
        }],
        currentTimeMarkerTemplate: [{
          type: Input
        }],
        validateEventTimesChanged: [{
          type: Input
        }],
        resizeCursors: [{
          type: Input
        }],
        dayHeaderClicked: [{
          type: Output
        }],
        eventClicked: [{
          type: Output
        }],
        eventTimesChanged: [{
          type: Output
        }],
        beforeViewRender: [{
          type: Output
        }],
        hourSegmentClicked: [{
          type: Output
        }]
      });
    })();
    CalendarWeekModule = class _CalendarWeekModule {
      static {
        this.\u0275fac = function CalendarWeekModule_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _CalendarWeekModule)();
        };
      }
      static {
        this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
          type: _CalendarWeekModule,
          imports: [ResizableModule, DragAndDropModule, CalendarCommonModule, CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent],
          exports: [ResizableModule, DragAndDropModule, CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent]
        });
      }
      static {
        this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
          imports: [ResizableModule, DragAndDropModule, CalendarCommonModule, ResizableModule, DragAndDropModule]
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarWeekModule, [{
        type: NgModule,
        args: [{
          imports: [ResizableModule, DragAndDropModule, CalendarCommonModule, CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent],
          exports: [ResizableModule, DragAndDropModule, CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent]
        }]
      }], null, null);
    })();
    CalendarDayViewComponent = class _CalendarDayViewComponent {
      constructor() {
        this.events = [];
        this.hourSegments = 2;
        this.hourSegmentHeight = 30;
        this.minimumEventHeight = 30;
        this.dayStartHour = 0;
        this.dayStartMinute = 0;
        this.dayEndHour = 23;
        this.dayEndMinute = 59;
        this.tooltipPlacement = "auto";
        this.tooltipAppendToBody = true;
        this.tooltipDelay = null;
        this.snapDraggedEvents = true;
        this.eventClicked = new EventEmitter();
        this.hourSegmentClicked = new EventEmitter();
        this.eventTimesChanged = new EventEmitter();
        this.beforeViewRender = new EventEmitter();
      }
      static {
        this.\u0275fac = function CalendarDayViewComponent_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _CalendarDayViewComponent)();
        };
      }
      static {
        this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
          type: _CalendarDayViewComponent,
          selectors: [["mwl-calendar-day-view"]],
          inputs: {
            viewDate: "viewDate",
            events: "events",
            hourSegments: "hourSegments",
            hourSegmentHeight: "hourSegmentHeight",
            hourDuration: "hourDuration",
            minimumEventHeight: "minimumEventHeight",
            dayStartHour: "dayStartHour",
            dayStartMinute: "dayStartMinute",
            dayEndHour: "dayEndHour",
            dayEndMinute: "dayEndMinute",
            refresh: "refresh",
            locale: "locale",
            eventSnapSize: "eventSnapSize",
            tooltipPlacement: "tooltipPlacement",
            tooltipTemplate: "tooltipTemplate",
            tooltipAppendToBody: "tooltipAppendToBody",
            tooltipDelay: "tooltipDelay",
            hourSegmentTemplate: "hourSegmentTemplate",
            eventTemplate: "eventTemplate",
            eventTitleTemplate: "eventTitleTemplate",
            eventActionsTemplate: "eventActionsTemplate",
            snapDraggedEvents: "snapDraggedEvents",
            allDayEventsLabelTemplate: "allDayEventsLabelTemplate",
            currentTimeMarkerTemplate: "currentTimeMarkerTemplate",
            validateEventTimesChanged: "validateEventTimesChanged",
            resizeCursors: "resizeCursors"
          },
          outputs: {
            eventClicked: "eventClicked",
            hourSegmentClicked: "hourSegmentClicked",
            eventTimesChanged: "eventTimesChanged",
            beforeViewRender: "beforeViewRender"
          },
          decls: 1,
          vars: 27,
          consts: [[1, "cal-day-view", 3, "eventClicked", "hourSegmentClicked", "eventTimesChanged", "beforeViewRender", "daysInWeek", "viewDate", "events", "hourSegments", "hourDuration", "hourSegmentHeight", "minimumEventHeight", "dayStartHour", "dayStartMinute", "dayEndHour", "dayEndMinute", "refresh", "locale", "eventSnapSize", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "resizeCursors", "hourSegmentTemplate", "eventTemplate", "eventTitleTemplate", "eventActionsTemplate", "snapDraggedEvents", "allDayEventsLabelTemplate", "currentTimeMarkerTemplate", "validateEventTimesChanged"]],
          template: function CalendarDayViewComponent_Template(rf, ctx) {
            if (rf & 1) {
              \u0275\u0275elementStart(0, "mwl-calendar-week-view", 0);
              \u0275\u0275listener("eventClicked", function CalendarDayViewComponent_Template_mwl_calendar_week_view_eventClicked_0_listener($event) {
                return ctx.eventClicked.emit($event);
              })("hourSegmentClicked", function CalendarDayViewComponent_Template_mwl_calendar_week_view_hourSegmentClicked_0_listener($event) {
                return ctx.hourSegmentClicked.emit($event);
              })("eventTimesChanged", function CalendarDayViewComponent_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) {
                return ctx.eventTimesChanged.emit($event);
              })("beforeViewRender", function CalendarDayViewComponent_Template_mwl_calendar_week_view_beforeViewRender_0_listener($event) {
                return ctx.beforeViewRender.emit($event);
              });
              \u0275\u0275elementEnd();
            }
            if (rf & 2) {
              \u0275\u0275property("daysInWeek", 1)("viewDate", ctx.viewDate)("events", ctx.events)("hourSegments", ctx.hourSegments)("hourDuration", ctx.hourDuration)("hourSegmentHeight", ctx.hourSegmentHeight)("minimumEventHeight", ctx.minimumEventHeight)("dayStartHour", ctx.dayStartHour)("dayStartMinute", ctx.dayStartMinute)("dayEndHour", ctx.dayEndHour)("dayEndMinute", ctx.dayEndMinute)("refresh", ctx.refresh)("locale", ctx.locale)("eventSnapSize", ctx.eventSnapSize)("tooltipPlacement", ctx.tooltipPlacement)("tooltipTemplate", ctx.tooltipTemplate)("tooltipAppendToBody", ctx.tooltipAppendToBody)("tooltipDelay", ctx.tooltipDelay)("resizeCursors", ctx.resizeCursors)("hourSegmentTemplate", ctx.hourSegmentTemplate)("eventTemplate", ctx.eventTemplate)("eventTitleTemplate", ctx.eventTitleTemplate)("eventActionsTemplate", ctx.eventActionsTemplate)("snapDraggedEvents", ctx.snapDraggedEvents)("allDayEventsLabelTemplate", ctx.allDayEventsLabelTemplate)("currentTimeMarkerTemplate", ctx.currentTimeMarkerTemplate)("validateEventTimesChanged", ctx.validateEventTimesChanged);
            }
          },
          dependencies: [CalendarWeekViewComponent],
          encapsulation: 2
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarDayViewComponent, [{
        type: Component,
        args: [{
          selector: "mwl-calendar-day-view",
          template: `
    <mwl-calendar-week-view
      class="cal-day-view"
      [daysInWeek]="1"
      [viewDate]="viewDate"
      [events]="events"
      [hourSegments]="hourSegments"
      [hourDuration]="hourDuration"
      [hourSegmentHeight]="hourSegmentHeight"
      [minimumEventHeight]="minimumEventHeight"
      [dayStartHour]="dayStartHour"
      [dayStartMinute]="dayStartMinute"
      [dayEndHour]="dayEndHour"
      [dayEndMinute]="dayEndMinute"
      [refresh]="refresh"
      [locale]="locale"
      [eventSnapSize]="eventSnapSize"
      [tooltipPlacement]="tooltipPlacement"
      [tooltipTemplate]="tooltipTemplate"
      [tooltipAppendToBody]="tooltipAppendToBody"
      [tooltipDelay]="tooltipDelay"
      [resizeCursors]="resizeCursors"
      [hourSegmentTemplate]="hourSegmentTemplate"
      [eventTemplate]="eventTemplate"
      [eventTitleTemplate]="eventTitleTemplate"
      [eventActionsTemplate]="eventActionsTemplate"
      [snapDraggedEvents]="snapDraggedEvents"
      [allDayEventsLabelTemplate]="allDayEventsLabelTemplate"
      [currentTimeMarkerTemplate]="currentTimeMarkerTemplate"
      [validateEventTimesChanged]="validateEventTimesChanged"
      (eventClicked)="eventClicked.emit($event)"
      (hourSegmentClicked)="hourSegmentClicked.emit($event)"
      (eventTimesChanged)="eventTimesChanged.emit($event)"
      (beforeViewRender)="beforeViewRender.emit($event)"
    />
  `,
          imports: [CalendarWeekViewComponent]
        }]
      }], null, {
        viewDate: [{
          type: Input
        }],
        events: [{
          type: Input
        }],
        hourSegments: [{
          type: Input
        }],
        hourSegmentHeight: [{
          type: Input
        }],
        hourDuration: [{
          type: Input
        }],
        minimumEventHeight: [{
          type: Input
        }],
        dayStartHour: [{
          type: Input
        }],
        dayStartMinute: [{
          type: Input
        }],
        dayEndHour: [{
          type: Input
        }],
        dayEndMinute: [{
          type: Input
        }],
        refresh: [{
          type: Input
        }],
        locale: [{
          type: Input
        }],
        eventSnapSize: [{
          type: Input
        }],
        tooltipPlacement: [{
          type: Input
        }],
        tooltipTemplate: [{
          type: Input
        }],
        tooltipAppendToBody: [{
          type: Input
        }],
        tooltipDelay: [{
          type: Input
        }],
        hourSegmentTemplate: [{
          type: Input
        }],
        eventTemplate: [{
          type: Input
        }],
        eventTitleTemplate: [{
          type: Input
        }],
        eventActionsTemplate: [{
          type: Input
        }],
        snapDraggedEvents: [{
          type: Input
        }],
        allDayEventsLabelTemplate: [{
          type: Input
        }],
        currentTimeMarkerTemplate: [{
          type: Input
        }],
        validateEventTimesChanged: [{
          type: Input
        }],
        resizeCursors: [{
          type: Input
        }],
        eventClicked: [{
          type: Output
        }],
        hourSegmentClicked: [{
          type: Output
        }],
        eventTimesChanged: [{
          type: Output
        }],
        beforeViewRender: [{
          type: Output
        }]
      });
    })();
    CalendarDayModule = class _CalendarDayModule {
      static {
        this.\u0275fac = function CalendarDayModule_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _CalendarDayModule)();
        };
      }
      static {
        this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
          type: _CalendarDayModule,
          imports: [CalendarDayViewComponent],
          exports: [CalendarDayViewComponent]
        });
      }
      static {
        this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarDayModule, [{
        type: NgModule,
        args: [{
          imports: [CalendarDayViewComponent],
          exports: [CalendarDayViewComponent]
        }]
      }], null, null);
    })();
    CalendarModule = class _CalendarModule {
      static forRoot(dateAdapter, config = {}) {
        return {
          ngModule: _CalendarModule,
          providers: [dateAdapter, config.eventTitleFormatter || CalendarEventTitleFormatter, config.dateFormatter || CalendarDateFormatter, config.utils || CalendarUtils, config.a11y || CalendarA11y]
        };
      }
      static {
        this.\u0275fac = function CalendarModule_Factory(__ngFactoryType__) {
          return new (__ngFactoryType__ || _CalendarModule)();
        };
      }
      static {
        this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
          type: _CalendarModule,
          imports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule],
          exports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule]
        });
      }
      static {
        this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
          imports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule, CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule]
        });
      }
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarModule, [{
        type: NgModule,
        args: [{
          imports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule],
          exports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule]
        }]
      }], null, null);
    })();
  }
});

// src/app/features/dashboard/main-page/components/calendar-display/calendar-widget/calendar-widget.ts
function CalendarWidget_Case_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mwl-calendar-month-view", 11);
    \u0275\u0275listener("dayClicked", function CalendarWidget_Case_22_Template_mwl_calendar_month_view_dayClicked_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dayClicked($event.day));
    })("eventClicked", function CalendarWidget_Case_22_Template_mwl_calendar_month_view_eventClicked_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleEventClicked($event.event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("viewDate", ctx_r1.currentViewDate())("events", ctx_r1.events())("refresh", ctx_r1.refresh)("activeDayIsOpen", ctx_r1.activeDayIsOpen);
  }
}
function CalendarWidget_Case_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10, 0)(2, "mwl-calendar-week-view", 12);
    \u0275\u0275listener("eventClicked", function CalendarWidget_Case_23_Template_mwl_calendar_week_view_eventClicked_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleEventClicked($event.event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("viewDate", ctx_r1.currentViewDate())("events", ctx_r1.events())("refresh", ctx_r1.refresh)("dayStartHour", ctx_r1.dayStartHour)("dayEndHour", ctx_r1.dayEndHour)("hourSegments", ctx_r1.hourSegments)("hourSegmentHeight", ctx_r1.hourSegmentHeight);
  }
}
function CalendarWidget_Case_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10, 0)(2, "mwl-calendar-day-view", 12);
    \u0275\u0275listener("eventClicked", function CalendarWidget_Case_24_Template_mwl_calendar_day_view_eventClicked_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleEventClicked($event.event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("viewDate", ctx_r1.currentViewDate())("events", ctx_r1.events())("refresh", ctx_r1.refresh)("dayStartHour", ctx_r1.dayStartHour)("dayEndHour", ctx_r1.dayEndHour)("hourSegments", ctx_r1.hourSegments)("hourSegmentHeight", ctx_r1.hourSegmentHeight);
  }
}
var _c02, CalendarWidget;
var init_calendar_widget = __esm({
  "src/app/features/dashboard/main-page/components/calendar-display/calendar-widget/calendar-widget.ts"() {
    "use strict";
    init_core();
    init_esm();
    init_angular_calendar();
    init_core();
    _c02 = ["timeViewScroll"];
    CalendarWidget = class _CalendarWidget {
      // Signal inputs from parent
      initialViewDate = input(/* @__PURE__ */ new Date(), __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "initialViewDate" } : {}), { alias: "viewDate" }));
      events = input([], ...ngDevMode ? [{ debugName: "events" }] : []);
      // Outputs to parent
      viewDateChange = output();
      eventClicked = output();
      // Local mutable state for the calendar library's two-way binding
      currentViewDate = signal(/* @__PURE__ */ new Date(), ...ngDevMode ? [{ debugName: "currentViewDate" }] : []);
      constructor() {
        effect(() => {
          this.currentViewDate.set(this.initialViewDate());
        });
        effect(() => {
          this.events();
          this.refresh.next();
        });
      }
      CalendarView = CalendarView;
      view = CalendarView.Month;
      refresh = new Subject();
      activeDayIsOpen = false;
      timeViewScroll;
      scrollStartHour = 8;
      hourSegments = 2;
      hourSegmentHeight = 30;
      dayStartHour = 0;
      dayEndHour = 23;
      setView(view) {
        this.view = view;
        this.activeDayIsOpen = false;
        this.scrollToStartHour();
      }
      onViewDateChange(date) {
        this.currentViewDate.set(date);
        this.viewDateChange.emit(date);
        this.activeDayIsOpen = false;
        this.scrollToStartHour();
      }
      handleEventClicked(event) {
        this.eventClicked.emit(event);
      }
      dayClicked({ date }) {
        if (this.view === CalendarView.Month) {
          this.currentViewDate.set(date);
          this.viewDateChange.emit(date);
          this.view = CalendarView.Day;
          this.activeDayIsOpen = false;
          this.scrollToStartHour();
        }
      }
      ngAfterViewInit() {
        this.scrollToStartHour();
      }
      scrollToStartHour() {
        if (this.view !== CalendarView.Week && this.view !== CalendarView.Day)
          return;
        setTimeout(() => {
          const el = this.timeViewScroll?.nativeElement;
          if (!el)
            return;
          const hourHeightPx = this.hourSegments * this.hourSegmentHeight;
          el.scrollTop = this.scrollStartHour * hourHeightPx;
        }, 0);
      }
      static \u0275fac = function CalendarWidget_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CalendarWidget)();
      };
      static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CalendarWidget, selectors: [["app-calendar-widget"]], viewQuery: function CalendarWidget_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c02, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.timeViewScroll = _t.first);
        }
      }, inputs: { initialViewDate: [1, "viewDate", "initialViewDate"], events: [1, "events"] }, outputs: { viewDateChange: "viewDateChange", eventClicked: "eventClicked" }, features: [\u0275\u0275ProvidersFeature([{ provide: CalendarDateFormatter, useClass: CalendarNativeDateFormatter }])], decls: 25, vars: 17, consts: [["timeViewScroll", ""], [1, "row", "text-center"], [1, "col-md-4"], [1, "btn-group"], ["type", "button", "mwlCalendarPreviousView", "", 1, "btn", "btn-primary", 3, "viewDateChange", "view", "viewDate"], ["type", "button", "mwlCalendarToday", "", 1, "btn", "btn-outline-secondary", 3, "viewDateChange", "viewDate"], ["type", "button", "mwlCalendarNextView", "", 1, "btn", "btn-primary", 3, "viewDateChange", "view", "viewDate"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "mt-3"], [3, "viewDate", "events", "refresh", "activeDayIsOpen"], [2, "max-height", "70vh", "overflow-y", "auto"], [3, "dayClicked", "eventClicked", "viewDate", "events", "refresh", "activeDayIsOpen"], [3, "eventClicked", "viewDate", "events", "refresh", "dayStartHour", "dayEndHour", "hourSegments", "hourSegmentHeight"]], template: function CalendarWidget_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "button", 4);
          \u0275\u0275listener("viewDateChange", function CalendarWidget_Template_button_viewDateChange_3_listener($event) {
            return ctx.onViewDateChange($event);
          });
          \u0275\u0275text(4, " Previous ");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(5, "button", 5);
          \u0275\u0275listener("viewDateChange", function CalendarWidget_Template_button_viewDateChange_5_listener($event) {
            return ctx.onViewDateChange($event);
          });
          \u0275\u0275text(6, " Today ");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(7, "button", 6);
          \u0275\u0275listener("viewDateChange", function CalendarWidget_Template_button_viewDateChange_7_listener($event) {
            return ctx.onViewDateChange($event);
          });
          \u0275\u0275text(8, " Next ");
          \u0275\u0275elementEnd()()();
          \u0275\u0275elementStart(9, "div", 2)(10, "h3");
          \u0275\u0275text(11);
          \u0275\u0275pipe(12, "calendarDate");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(13, "div", 2)(14, "div", 3)(15, "button", 7);
          \u0275\u0275listener("click", function CalendarWidget_Template_button_click_15_listener() {
            return ctx.setView(ctx.CalendarView.Month);
          });
          \u0275\u0275text(16, " Month ");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(17, "button", 7);
          \u0275\u0275listener("click", function CalendarWidget_Template_button_click_17_listener() {
            return ctx.setView(ctx.CalendarView.Week);
          });
          \u0275\u0275text(18, " Week ");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(19, "button", 7);
          \u0275\u0275listener("click", function CalendarWidget_Template_button_click_19_listener() {
            return ctx.setView(ctx.CalendarView.Day);
          });
          \u0275\u0275text(20, " Day ");
          \u0275\u0275elementEnd()()()();
          \u0275\u0275elementStart(21, "div", 8);
          \u0275\u0275conditionalCreate(22, CalendarWidget_Case_22_Template, 1, 4, "mwl-calendar-month-view", 9)(23, CalendarWidget_Case_23_Template, 3, 7, "div", 10)(24, CalendarWidget_Case_24_Template, 3, 7, "div", 10);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          let tmp_9_0;
          \u0275\u0275advance(3);
          \u0275\u0275property("view", ctx.view)("viewDate", ctx.currentViewDate());
          \u0275\u0275advance(2);
          \u0275\u0275property("viewDate", ctx.currentViewDate());
          \u0275\u0275advance(2);
          \u0275\u0275property("view", ctx.view)("viewDate", ctx.currentViewDate());
          \u0275\u0275advance(4);
          \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(12, 13, ctx.currentViewDate(), ctx.view + "ViewTitle", "en"));
          \u0275\u0275advance(4);
          \u0275\u0275classProp("active", ctx.view === ctx.CalendarView.Month);
          \u0275\u0275advance(2);
          \u0275\u0275classProp("active", ctx.view === ctx.CalendarView.Week);
          \u0275\u0275advance(2);
          \u0275\u0275classProp("active", ctx.view === ctx.CalendarView.Day);
          \u0275\u0275advance(3);
          \u0275\u0275conditional((tmp_9_0 = ctx.view) === ctx.CalendarView.Month ? 22 : tmp_9_0 === ctx.CalendarView.Week ? 23 : tmp_9_0 === ctx.CalendarView.Day ? 24 : -1);
        }
      }, dependencies: [
        CalendarPreviousViewDirective,
        CalendarNextViewDirective,
        CalendarTodayDirective,
        CalendarMonthViewComponent,
        CalendarWeekViewComponent,
        CalendarDayViewComponent,
        CalendarDatePipe
      ], encapsulation: 2, changeDetection: 0 });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarWidget, [{
        type: Component,
        args: [{ selector: "app-calendar-widget", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, providers: [{ provide: CalendarDateFormatter, useClass: CalendarNativeDateFormatter }], imports: [
          CalendarPreviousViewDirective,
          CalendarNextViewDirective,
          CalendarTodayDirective,
          CalendarMonthViewComponent,
          CalendarWeekViewComponent,
          CalendarDayViewComponent,
          CalendarDatePipe
        ], template: `<div class="row text-center">
  <div class="col-md-4">
    <div class="btn-group">
      <button
        type="button"
        class="btn btn-primary"
        mwlCalendarPreviousView
        [view]="view"
        [viewDate]="currentViewDate()"
        (viewDateChange)="onViewDateChange($event)"
      >
        Previous
      </button>

      <button
        type="button"
        class="btn btn-outline-secondary"
        mwlCalendarToday
        [viewDate]="currentViewDate()"
        (viewDateChange)="onViewDateChange($event)"
      >
        Today
      </button>

      <button
        type="button"
        class="btn btn-primary"
        mwlCalendarNextView
        [view]="view"
        [viewDate]="currentViewDate()"
        (viewDateChange)="onViewDateChange($event)"
      >
        Next
      </button>
    </div>
  </div>

  <div class="col-md-4">
    <h3>{{ currentViewDate() | calendarDate:(view + 'ViewTitle'):'en' }}</h3>
  </div>

  <div class="col-md-4">
    <div class="btn-group">
      <button
        type="button"
        class="btn btn-primary"
        (click)="setView(CalendarView.Month)"
        [class.active]="view === CalendarView.Month"
      >
        Month
      </button>

      <button
        type="button"
        class="btn btn-primary"
        (click)="setView(CalendarView.Week)"
        [class.active]="view === CalendarView.Week"
      >
        Week
      </button>

      <button
        type="button"
        class="btn btn-primary"
        (click)="setView(CalendarView.Day)"
        [class.active]="view === CalendarView.Day"
      >
        Day
      </button>
    </div>
  </div>
</div>

<div class="mt-3">
  @switch (view) {
    @case (CalendarView.Month) {
      <mwl-calendar-month-view
        [viewDate]="currentViewDate()"
        [events]="events()"
        [refresh]="refresh"
        [activeDayIsOpen]="activeDayIsOpen"
        (dayClicked)="dayClicked($event.day)"
        (eventClicked)="handleEventClicked($event.event)"
      />
    }

    @case (CalendarView.Week) {
      <div
        #timeViewScroll
        style="max-height: 70vh; overflow-y: auto;"
      >
        <mwl-calendar-week-view
          [viewDate]="currentViewDate()"
          [events]="events()"
          [refresh]="refresh"
          [dayStartHour]="dayStartHour"
          [dayEndHour]="dayEndHour"
          [hourSegments]="hourSegments"
          [hourSegmentHeight]="hourSegmentHeight"
          (eventClicked)="handleEventClicked($event.event)"
        />
      </div>
    }

    @case (CalendarView.Day) {
      <div
        #timeViewScroll
        style="max-height: 70vh; overflow-y: auto;"
      >
        <mwl-calendar-day-view
          [viewDate]="currentViewDate()"
          [events]="events()"
          [refresh]="refresh"
          [dayStartHour]="dayStartHour"
          [dayEndHour]="dayEndHour"
          [hourSegments]="hourSegments"
          [hourSegmentHeight]="hourSegmentHeight"
          (eventClicked)="handleEventClicked($event.event)"
        />
      </div>
    }
  }
</div>` }]
      }], () => [], { initialViewDate: [{ type: Input, args: [{ isSignal: true, alias: "viewDate", required: false }] }], events: [{ type: Input, args: [{ isSignal: true, alias: "events", required: false }] }], viewDateChange: [{ type: Output, args: ["viewDateChange"] }], eventClicked: [{ type: Output, args: ["eventClicked"] }], timeViewScroll: [{
        type: ViewChild,
        args: ["timeViewScroll"]
      }] });
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CalendarWidget, { className: "CalendarWidget", filePath: "src/app/features/dashboard/main-page/components/calendar-display/calendar-widget/calendar-widget.ts", lineNumber: 47 });
    })();
  }
});

// node_modules/date-fns/constants.js
var daysInYear, maxTime, minTime, millisecondsInWeek, millisecondsInDay, millisecondsInMinute, millisecondsInHour, secondsInHour, secondsInDay, secondsInWeek, secondsInYear, secondsInMonth, secondsInQuarter, constructFromSymbol;
var init_constants = __esm({
  "node_modules/date-fns/constants.js"() {
    "use strict";
    daysInYear = 365.2425;
    maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
    minTime = -maxTime;
    millisecondsInWeek = 6048e5;
    millisecondsInDay = 864e5;
    millisecondsInMinute = 6e4;
    millisecondsInHour = 36e5;
    secondsInHour = 3600;
    secondsInDay = secondsInHour * 24;
    secondsInWeek = secondsInDay * 7;
    secondsInYear = secondsInDay * daysInYear;
    secondsInMonth = secondsInYear / 12;
    secondsInQuarter = secondsInMonth * 3;
    constructFromSymbol = Symbol.for("constructDateFrom");
  }
});

// node_modules/date-fns/constructFrom.js
function constructFrom(date, value) {
  if (typeof date === "function") return date(value);
  if (date && typeof date === "object" && constructFromSymbol in date)
    return date[constructFromSymbol](value);
  if (date instanceof Date) return new date.constructor(value);
  return new Date(value);
}
var init_constructFrom = __esm({
  "node_modules/date-fns/constructFrom.js"() {
    "use strict";
    init_constants();
  }
});

// node_modules/date-fns/toDate.js
function toDate(argument, context) {
  return constructFrom(context || argument, argument);
}
var init_toDate = __esm({
  "node_modules/date-fns/toDate.js"() {
    "use strict";
    init_constructFrom();
  }
});

// node_modules/date-fns/addDays.js
function addDays(date, amount, options) {
  const _date = toDate(date, options?.in);
  if (isNaN(amount)) return constructFrom(options?.in || date, NaN);
  if (!amount) return _date;
  _date.setDate(_date.getDate() + amount);
  return _date;
}
var init_addDays = __esm({
  "node_modules/date-fns/addDays.js"() {
    "use strict";
    init_constructFrom();
    init_toDate();
  }
});

// node_modules/date-fns/addMonths.js
function addMonths(date, amount, options) {
  const _date = toDate(date, options?.in);
  if (isNaN(amount)) return constructFrom(options?.in || date, NaN);
  if (!amount) {
    return _date;
  }
  const dayOfMonth = _date.getDate();
  const endOfDesiredMonth = constructFrom(options?.in || date, _date.getTime());
  endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
  const daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    return endOfDesiredMonth;
  } else {
    _date.setFullYear(
      endOfDesiredMonth.getFullYear(),
      endOfDesiredMonth.getMonth(),
      dayOfMonth
    );
    return _date;
  }
}
var init_addMonths = __esm({
  "node_modules/date-fns/addMonths.js"() {
    "use strict";
    init_constructFrom();
    init_toDate();
  }
});

// node_modules/date-fns/add.js
var init_add = __esm({
  "node_modules/date-fns/add.js"() {
    "use strict";
  }
});

// node_modules/date-fns/isSaturday.js
var init_isSaturday = __esm({
  "node_modules/date-fns/isSaturday.js"() {
    "use strict";
  }
});

// node_modules/date-fns/isSunday.js
var init_isSunday = __esm({
  "node_modules/date-fns/isSunday.js"() {
    "use strict";
  }
});

// node_modules/date-fns/isWeekend.js
var init_isWeekend = __esm({
  "node_modules/date-fns/isWeekend.js"() {
    "use strict";
  }
});

// node_modules/date-fns/addBusinessDays.js
var init_addBusinessDays = __esm({
  "node_modules/date-fns/addBusinessDays.js"() {
    "use strict";
  }
});

// node_modules/date-fns/addMilliseconds.js
function addMilliseconds(date, amount, options) {
  return constructFrom(options?.in || date, +toDate(date) + amount);
}
var init_addMilliseconds = __esm({
  "node_modules/date-fns/addMilliseconds.js"() {
    "use strict";
    init_constructFrom();
    init_toDate();
  }
});

// node_modules/date-fns/addHours.js
function addHours(date, amount, options) {
  return addMilliseconds(date, amount * millisecondsInHour, options);
}
var init_addHours = __esm({
  "node_modules/date-fns/addHours.js"() {
    "use strict";
    init_addMilliseconds();
    init_constants();
  }
});

// node_modules/date-fns/_lib/defaultOptions.js
function getDefaultOptions() {
  return defaultOptions;
}
var defaultOptions;
var init_defaultOptions = __esm({
  "node_modules/date-fns/_lib/defaultOptions.js"() {
    "use strict";
    defaultOptions = {};
  }
});

// node_modules/date-fns/startOfWeek.js
function startOfWeek(date, options) {
  const defaultOptions2 = getDefaultOptions();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 0;
  const _date = toDate(date, options?.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
var init_startOfWeek = __esm({
  "node_modules/date-fns/startOfWeek.js"() {
    "use strict";
    init_defaultOptions();
    init_toDate();
  }
});

// node_modules/date-fns/startOfISOWeek.js
function startOfISOWeek(date, options) {
  return startOfWeek(date, __spreadProps(__spreadValues({}, options), { weekStartsOn: 1 }));
}
var init_startOfISOWeek = __esm({
  "node_modules/date-fns/startOfISOWeek.js"() {
    "use strict";
    init_startOfWeek();
  }
});

// node_modules/date-fns/getISOWeekYear.js
function getISOWeekYear(date, options) {
  const _date = toDate(date, options?.in);
  const year = _date.getFullYear();
  const fourthOfJanuaryOfNextYear = constructFrom(_date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
  const fourthOfJanuaryOfThisYear = constructFrom(_date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
var init_getISOWeekYear = __esm({
  "node_modules/date-fns/getISOWeekYear.js"() {
    "use strict";
    init_constructFrom();
    init_startOfISOWeek();
    init_toDate();
  }
});

// node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
function getTimezoneOffsetInMilliseconds(date) {
  const _date = toDate(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds()
    )
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}
var init_getTimezoneOffsetInMilliseconds = __esm({
  "node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js"() {
    "use strict";
    init_toDate();
  }
});

// node_modules/date-fns/_lib/normalizeDates.js
function normalizeDates(context, ...dates) {
  const normalize = constructFrom.bind(
    null,
    context || dates.find((date) => typeof date === "object")
  );
  return dates.map(normalize);
}
var init_normalizeDates = __esm({
  "node_modules/date-fns/_lib/normalizeDates.js"() {
    "use strict";
    init_constructFrom();
  }
});

// node_modules/date-fns/startOfDay.js
function startOfDay(date, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
var init_startOfDay = __esm({
  "node_modules/date-fns/startOfDay.js"() {
    "use strict";
    init_toDate();
  }
});

// node_modules/date-fns/differenceInCalendarDays.js
function differenceInCalendarDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  const laterStartOfDay = startOfDay(laterDate_);
  const earlierStartOfDay = startOfDay(earlierDate_);
  const laterTimestamp = +laterStartOfDay - getTimezoneOffsetInMilliseconds(laterStartOfDay);
  const earlierTimestamp = +earlierStartOfDay - getTimezoneOffsetInMilliseconds(earlierStartOfDay);
  return Math.round((laterTimestamp - earlierTimestamp) / millisecondsInDay);
}
var init_differenceInCalendarDays = __esm({
  "node_modules/date-fns/differenceInCalendarDays.js"() {
    "use strict";
    init_getTimezoneOffsetInMilliseconds();
    init_normalizeDates();
    init_constants();
    init_startOfDay();
  }
});

// node_modules/date-fns/startOfISOWeekYear.js
function startOfISOWeekYear(date, options) {
  const year = getISOWeekYear(date, options);
  const fourthOfJanuary = constructFrom(options?.in || date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return startOfISOWeek(fourthOfJanuary);
}
var init_startOfISOWeekYear = __esm({
  "node_modules/date-fns/startOfISOWeekYear.js"() {
    "use strict";
    init_constructFrom();
    init_getISOWeekYear();
    init_startOfISOWeek();
  }
});

// node_modules/date-fns/setISOWeekYear.js
var init_setISOWeekYear = __esm({
  "node_modules/date-fns/setISOWeekYear.js"() {
    "use strict";
  }
});

// node_modules/date-fns/addISOWeekYears.js
var init_addISOWeekYears = __esm({
  "node_modules/date-fns/addISOWeekYears.js"() {
    "use strict";
  }
});

// node_modules/date-fns/addMinutes.js
function addMinutes(date, amount, options) {
  const _date = toDate(date, options?.in);
  _date.setTime(_date.getTime() + amount * millisecondsInMinute);
  return _date;
}
var init_addMinutes = __esm({
  "node_modules/date-fns/addMinutes.js"() {
    "use strict";
    init_constants();
    init_toDate();
  }
});

// node_modules/date-fns/addQuarters.js
var init_addQuarters = __esm({
  "node_modules/date-fns/addQuarters.js"() {
    "use strict";
  }
});

// node_modules/date-fns/addSeconds.js
function addSeconds(date, amount, options) {
  return addMilliseconds(date, amount * 1e3, options);
}
var init_addSeconds = __esm({
  "node_modules/date-fns/addSeconds.js"() {
    "use strict";
    init_addMilliseconds();
  }
});

// node_modules/date-fns/addWeeks.js
function addWeeks(date, amount, options) {
  return addDays(date, amount * 7, options);
}
var init_addWeeks = __esm({
  "node_modules/date-fns/addWeeks.js"() {
    "use strict";
    init_addDays();
  }
});

// node_modules/date-fns/addYears.js
var init_addYears = __esm({
  "node_modules/date-fns/addYears.js"() {
    "use strict";
  }
});

// node_modules/date-fns/areIntervalsOverlapping.js
var init_areIntervalsOverlapping = __esm({
  "node_modules/date-fns/areIntervalsOverlapping.js"() {
    "use strict";
  }
});

// node_modules/date-fns/max.js
function max(dates, options) {
  let result;
  let context = options?.in;
  dates.forEach((date) => {
    if (!context && typeof date === "object")
      context = constructFrom.bind(null, date);
    const date_ = toDate(date, context);
    if (!result || result < date_ || isNaN(+date_)) result = date_;
  });
  return constructFrom(context, result || NaN);
}
var init_max = __esm({
  "node_modules/date-fns/max.js"() {
    "use strict";
    init_constructFrom();
    init_toDate();
  }
});

// node_modules/date-fns/min.js
var init_min = __esm({
  "node_modules/date-fns/min.js"() {
    "use strict";
  }
});

// node_modules/date-fns/clamp.js
var init_clamp = __esm({
  "node_modules/date-fns/clamp.js"() {
    "use strict";
  }
});

// node_modules/date-fns/closestIndexTo.js
var init_closestIndexTo = __esm({
  "node_modules/date-fns/closestIndexTo.js"() {
    "use strict";
  }
});

// node_modules/date-fns/closestTo.js
var init_closestTo = __esm({
  "node_modules/date-fns/closestTo.js"() {
    "use strict";
  }
});

// node_modules/date-fns/compareAsc.js
var init_compareAsc = __esm({
  "node_modules/date-fns/compareAsc.js"() {
    "use strict";
  }
});

// node_modules/date-fns/compareDesc.js
var init_compareDesc = __esm({
  "node_modules/date-fns/compareDesc.js"() {
    "use strict";
  }
});

// node_modules/date-fns/constructNow.js
var init_constructNow = __esm({
  "node_modules/date-fns/constructNow.js"() {
    "use strict";
  }
});

// node_modules/date-fns/daysToWeeks.js
var init_daysToWeeks = __esm({
  "node_modules/date-fns/daysToWeeks.js"() {
    "use strict";
  }
});

// node_modules/date-fns/isSameDay.js
function isSameDay(laterDate, earlierDate, options) {
  const [dateLeft_, dateRight_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  return +startOfDay(dateLeft_) === +startOfDay(dateRight_);
}
var init_isSameDay = __esm({
  "node_modules/date-fns/isSameDay.js"() {
    "use strict";
    init_normalizeDates();
    init_startOfDay();
  }
});

// node_modules/date-fns/isDate.js
var init_isDate = __esm({
  "node_modules/date-fns/isDate.js"() {
    "use strict";
  }
});

// node_modules/date-fns/isValid.js
var init_isValid = __esm({
  "node_modules/date-fns/isValid.js"() {
    "use strict";
  }
});

// node_modules/date-fns/differenceInBusinessDays.js
var init_differenceInBusinessDays = __esm({
  "node_modules/date-fns/differenceInBusinessDays.js"() {
    "use strict";
  }
});

// node_modules/date-fns/differenceInCalendarISOWeekYears.js
var init_differenceInCalendarISOWeekYears = __esm({
  "node_modules/date-fns/differenceInCalendarISOWeekYears.js"() {
    "use strict";
  }
});

// node_modules/date-fns/differenceInCalendarISOWeeks.js
var init_differenceInCalendarISOWeeks = __esm({
  "node_modules/date-fns/differenceInCalendarISOWeeks.js"() {
    "use strict";
  }
});

// node_modules/date-fns/differenceInCalendarMonths.js
var init_differenceInCalendarMonths = __esm({
  "node_modules/date-fns/differenceInCalendarMonths.js"() {
    "use strict";
  }
});

// node_modules/date-fns/getQuarter.js
var init_getQuarter = __esm({
  "node_modules/date-fns/getQuarter.js"() {
    "use strict";
  }
});

// node_modules/date-fns/differenceInCalendarQuarters.js
var init_differenceInCalendarQuarters = __esm({
  "node_modules/date-fns/differenceInCalendarQuarters.js"() {
    "use strict";
  }
});

// node_modules/date-fns/differenceInCalendarWeeks.js
var init_differenceInCalendarWeeks = __esm({
  "node_modules/date-fns/differenceInCalendarWeeks.js"() {
    "use strict";
  }
});

// node_modules/date-fns/differenceInCalendarYears.js
var init_differenceInCalendarYears = __esm({
  "node_modules/date-fns/differenceInCalendarYears.js"() {
    "use strict";
  }
});

// node_modules/date-fns/differenceInDays.js
function differenceInDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  const sign = compareLocalAsc(laterDate_, earlierDate_);
  const difference = Math.abs(
    differenceInCalendarDays(laterDate_, earlierDate_)
  );
  laterDate_.setDate(laterDate_.getDate() - sign * difference);
  const isLastDayNotFull = Number(
    compareLocalAsc(laterDate_, earlierDate_) === -sign
  );
  const result = sign * (difference - isLastDayNotFull);
  return result === 0 ? 0 : result;
}
function compareLocalAsc(laterDate, earlierDate) {
  const diff = laterDate.getFullYear() - earlierDate.getFullYear() || laterDate.getMonth() - earlierDate.getMonth() || laterDate.getDate() - earlierDate.getDate() || laterDate.getHours() - earlierDate.getHours() || laterDate.getMinutes() - earlierDate.getMinutes() || laterDate.getSeconds() - earlierDate.getSeconds() || laterDate.getMilliseconds() - earlierDate.getMilliseconds();
  if (diff < 0) return -1;
  if (diff > 0) return 1;
  return diff;
}
var init_differenceInDays = __esm({
  "node_modules/date-fns/differenceInDays.js"() {
    "use strict";
    init_normalizeDates();
    init_differenceInCalendarDays();
  }
});

// node_modules/date-fns/_lib/getRoundingMethod.js
function getRoundingMethod(method) {
  return (number) => {
    const round = method ? Math[method] : Math.trunc;
    const result = round(number);
    return result === 0 ? 0 : result;
  };
}
var init_getRoundingMethod = __esm({
  "node_modules/date-fns/_lib/getRoundingMethod.js"() {
    "use strict";
  }
});

// node_modules/date-fns/differenceInHours.js
var init_differenceInHours = __esm({
  "node_modules/date-fns/differenceInHours.js"() {
    "use strict";
  }
});

// node_modules/date-fns/subISOWeekYears.js
var init_subISOWeekYears = __esm({
  "node_modules/date-fns/subISOWeekYears.js"() {
    "use strict";
  }
});

// node_modules/date-fns/differenceInISOWeekYears.js
var init_differenceInISOWeekYears = __esm({
  "node_modules/date-fns/differenceInISOWeekYears.js"() {
    "use strict";
  }
});

// node_modules/date-fns/differenceInMilliseconds.js
function differenceInMilliseconds(laterDate, earlierDate) {
  return +toDate(laterDate) - +toDate(earlierDate);
}
var init_differenceInMilliseconds = __esm({
  "node_modules/date-fns/differenceInMilliseconds.js"() {
    "use strict";
    init_toDate();
  }
});

// node_modules/date-fns/differenceInMinutes.js
function differenceInMinutes(dateLeft, dateRight, options) {
  const diff = differenceInMilliseconds(dateLeft, dateRight) / millisecondsInMinute;
  return getRoundingMethod(options?.roundingMethod)(diff);
}
var init_differenceInMinutes = __esm({
  "node_modules/date-fns/differenceInMinutes.js"() {
    "use strict";
    init_getRoundingMethod();
    init_constants();
    init_differenceInMilliseconds();
  }
});

// node_modules/date-fns/endOfDay.js
function endOfDay(date, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(23, 59, 59, 999);
  return _date;
}
var init_endOfDay = __esm({
  "node_modules/date-fns/endOfDay.js"() {
    "use strict";
    init_toDate();
  }
});

// node_modules/date-fns/endOfMonth.js
function endOfMonth(date, options) {
  const _date = toDate(date, options?.in);
  const month = _date.getMonth();
  _date.setFullYear(_date.getFullYear(), month + 1, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}
var init_endOfMonth = __esm({
  "node_modules/date-fns/endOfMonth.js"() {
    "use strict";
    init_toDate();
  }
});

// node_modules/date-fns/isLastDayOfMonth.js
var init_isLastDayOfMonth = __esm({
  "node_modules/date-fns/isLastDayOfMonth.js"() {
    "use strict";
  }
});

// node_modules/date-fns/differenceInMonths.js
var init_differenceInMonths = __esm({
  "node_modules/date-fns/differenceInMonths.js"() {
    "use strict";
  }
});

// node_modules/date-fns/differenceInQuarters.js
var init_differenceInQuarters = __esm({
  "node_modules/date-fns/differenceInQuarters.js"() {
    "use strict";
  }
});

// node_modules/date-fns/differenceInSeconds.js
function differenceInSeconds(laterDate, earlierDate, options) {
  const diff = differenceInMilliseconds(laterDate, earlierDate) / 1e3;
  return getRoundingMethod(options?.roundingMethod)(diff);
}
var init_differenceInSeconds = __esm({
  "node_modules/date-fns/differenceInSeconds.js"() {
    "use strict";
    init_getRoundingMethod();
    init_differenceInMilliseconds();
  }
});

// node_modules/date-fns/differenceInWeeks.js
var init_differenceInWeeks = __esm({
  "node_modules/date-fns/differenceInWeeks.js"() {
    "use strict";
  }
});

// node_modules/date-fns/differenceInYears.js
var init_differenceInYears = __esm({
  "node_modules/date-fns/differenceInYears.js"() {
    "use strict";
  }
});

// node_modules/date-fns/eachDayOfInterval.js
var init_eachDayOfInterval = __esm({
  "node_modules/date-fns/eachDayOfInterval.js"() {
    "use strict";
  }
});

// node_modules/date-fns/eachHourOfInterval.js
var init_eachHourOfInterval = __esm({
  "node_modules/date-fns/eachHourOfInterval.js"() {
    "use strict";
  }
});

// node_modules/date-fns/eachMinuteOfInterval.js
var init_eachMinuteOfInterval = __esm({
  "node_modules/date-fns/eachMinuteOfInterval.js"() {
    "use strict";
  }
});

// node_modules/date-fns/eachMonthOfInterval.js
var init_eachMonthOfInterval = __esm({
  "node_modules/date-fns/eachMonthOfInterval.js"() {
    "use strict";
  }
});

// node_modules/date-fns/startOfQuarter.js
var init_startOfQuarter = __esm({
  "node_modules/date-fns/startOfQuarter.js"() {
    "use strict";
  }
});

// node_modules/date-fns/eachQuarterOfInterval.js
var init_eachQuarterOfInterval = __esm({
  "node_modules/date-fns/eachQuarterOfInterval.js"() {
    "use strict";
  }
});

// node_modules/date-fns/eachWeekOfInterval.js
var init_eachWeekOfInterval = __esm({
  "node_modules/date-fns/eachWeekOfInterval.js"() {
    "use strict";
  }
});

// node_modules/date-fns/eachWeekendOfInterval.js
var init_eachWeekendOfInterval = __esm({
  "node_modules/date-fns/eachWeekendOfInterval.js"() {
    "use strict";
  }
});

// node_modules/date-fns/startOfMonth.js
function startOfMonth(date, options) {
  const _date = toDate(date, options?.in);
  _date.setDate(1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
var init_startOfMonth = __esm({
  "node_modules/date-fns/startOfMonth.js"() {
    "use strict";
    init_toDate();
  }
});

// node_modules/date-fns/eachWeekendOfMonth.js
var init_eachWeekendOfMonth = __esm({
  "node_modules/date-fns/eachWeekendOfMonth.js"() {
    "use strict";
  }
});

// node_modules/date-fns/endOfYear.js
var init_endOfYear = __esm({
  "node_modules/date-fns/endOfYear.js"() {
    "use strict";
  }
});

// node_modules/date-fns/startOfYear.js
var init_startOfYear = __esm({
  "node_modules/date-fns/startOfYear.js"() {
    "use strict";
  }
});

// node_modules/date-fns/eachWeekendOfYear.js
var init_eachWeekendOfYear = __esm({
  "node_modules/date-fns/eachWeekendOfYear.js"() {
    "use strict";
  }
});

// node_modules/date-fns/eachYearOfInterval.js
var init_eachYearOfInterval = __esm({
  "node_modules/date-fns/eachYearOfInterval.js"() {
    "use strict";
  }
});

// node_modules/date-fns/endOfDecade.js
var init_endOfDecade = __esm({
  "node_modules/date-fns/endOfDecade.js"() {
    "use strict";
  }
});

// node_modules/date-fns/endOfHour.js
var init_endOfHour = __esm({
  "node_modules/date-fns/endOfHour.js"() {
    "use strict";
  }
});

// node_modules/date-fns/endOfWeek.js
function endOfWeek(date, options) {
  const defaultOptions2 = getDefaultOptions();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 0;
  const _date = toDate(date, options?.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  _date.setDate(_date.getDate() + diff);
  _date.setHours(23, 59, 59, 999);
  return _date;
}
var init_endOfWeek = __esm({
  "node_modules/date-fns/endOfWeek.js"() {
    "use strict";
    init_defaultOptions();
    init_toDate();
  }
});

// node_modules/date-fns/endOfISOWeek.js
var init_endOfISOWeek = __esm({
  "node_modules/date-fns/endOfISOWeek.js"() {
    "use strict";
  }
});

// node_modules/date-fns/endOfISOWeekYear.js
var init_endOfISOWeekYear = __esm({
  "node_modules/date-fns/endOfISOWeekYear.js"() {
    "use strict";
  }
});

// node_modules/date-fns/endOfMinute.js
var init_endOfMinute = __esm({
  "node_modules/date-fns/endOfMinute.js"() {
    "use strict";
  }
});

// node_modules/date-fns/endOfQuarter.js
var init_endOfQuarter = __esm({
  "node_modules/date-fns/endOfQuarter.js"() {
    "use strict";
  }
});

// node_modules/date-fns/endOfSecond.js
var init_endOfSecond = __esm({
  "node_modules/date-fns/endOfSecond.js"() {
    "use strict";
  }
});

// node_modules/date-fns/endOfToday.js
var init_endOfToday = __esm({
  "node_modules/date-fns/endOfToday.js"() {
    "use strict";
  }
});

// node_modules/date-fns/endOfTomorrow.js
var init_endOfTomorrow = __esm({
  "node_modules/date-fns/endOfTomorrow.js"() {
    "use strict";
  }
});

// node_modules/date-fns/endOfYesterday.js
var init_endOfYesterday = __esm({
  "node_modules/date-fns/endOfYesterday.js"() {
    "use strict";
  }
});

// node_modules/date-fns/getDayOfYear.js
var init_getDayOfYear = __esm({
  "node_modules/date-fns/getDayOfYear.js"() {
    "use strict";
  }
});

// node_modules/date-fns/getISOWeek.js
function getISOWeek(date, options) {
  const _date = toDate(date, options?.in);
  const diff = +startOfISOWeek(_date) - +startOfISOWeekYear(_date);
  return Math.round(diff / millisecondsInWeek) + 1;
}
var init_getISOWeek = __esm({
  "node_modules/date-fns/getISOWeek.js"() {
    "use strict";
    init_constants();
    init_startOfISOWeek();
    init_startOfISOWeekYear();
    init_toDate();
  }
});

// node_modules/date-fns/getWeekYear.js
var init_getWeekYear = __esm({
  "node_modules/date-fns/getWeekYear.js"() {
    "use strict";
  }
});

// node_modules/date-fns/startOfWeekYear.js
var init_startOfWeekYear = __esm({
  "node_modules/date-fns/startOfWeekYear.js"() {
    "use strict";
  }
});

// node_modules/date-fns/getWeek.js
var init_getWeek = __esm({
  "node_modules/date-fns/getWeek.js"() {
    "use strict";
  }
});

// node_modules/date-fns/format.js
var init_format = __esm({
  "node_modules/date-fns/format.js"() {
    "use strict";
  }
});

// node_modules/date-fns/formatDistance.js
var init_formatDistance = __esm({
  "node_modules/date-fns/formatDistance.js"() {
    "use strict";
  }
});

// node_modules/date-fns/formatDistanceStrict.js
var init_formatDistanceStrict = __esm({
  "node_modules/date-fns/formatDistanceStrict.js"() {
    "use strict";
  }
});

// node_modules/date-fns/formatDistanceToNow.js
var init_formatDistanceToNow = __esm({
  "node_modules/date-fns/formatDistanceToNow.js"() {
    "use strict";
  }
});

// node_modules/date-fns/formatDistanceToNowStrict.js
var init_formatDistanceToNowStrict = __esm({
  "node_modules/date-fns/formatDistanceToNowStrict.js"() {
    "use strict";
  }
});

// node_modules/date-fns/formatDuration.js
var init_formatDuration = __esm({
  "node_modules/date-fns/formatDuration.js"() {
    "use strict";
  }
});

// node_modules/date-fns/formatISO.js
var init_formatISO = __esm({
  "node_modules/date-fns/formatISO.js"() {
    "use strict";
  }
});

// node_modules/date-fns/formatISO9075.js
var init_formatISO9075 = __esm({
  "node_modules/date-fns/formatISO9075.js"() {
    "use strict";
  }
});

// node_modules/date-fns/formatISODuration.js
var init_formatISODuration = __esm({
  "node_modules/date-fns/formatISODuration.js"() {
    "use strict";
  }
});

// node_modules/date-fns/formatRFC3339.js
var init_formatRFC3339 = __esm({
  "node_modules/date-fns/formatRFC3339.js"() {
    "use strict";
  }
});

// node_modules/date-fns/formatRFC7231.js
var init_formatRFC7231 = __esm({
  "node_modules/date-fns/formatRFC7231.js"() {
    "use strict";
  }
});

// node_modules/date-fns/formatRelative.js
var init_formatRelative = __esm({
  "node_modules/date-fns/formatRelative.js"() {
    "use strict";
  }
});

// node_modules/date-fns/fromUnixTime.js
var init_fromUnixTime = __esm({
  "node_modules/date-fns/fromUnixTime.js"() {
    "use strict";
  }
});

// node_modules/date-fns/getDate.js
function getDate(date, options) {
  return toDate(date, options?.in).getDate();
}
var init_getDate = __esm({
  "node_modules/date-fns/getDate.js"() {
    "use strict";
    init_toDate();
  }
});

// node_modules/date-fns/getDay.js
function getDay(date, options) {
  return toDate(date, options?.in).getDay();
}
var init_getDay = __esm({
  "node_modules/date-fns/getDay.js"() {
    "use strict";
    init_toDate();
  }
});

// node_modules/date-fns/getDaysInMonth.js
function getDaysInMonth(date, options) {
  const _date = toDate(date, options?.in);
  const year = _date.getFullYear();
  const monthIndex = _date.getMonth();
  const lastDayOfMonth = constructFrom(_date, 0);
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return lastDayOfMonth.getDate();
}
var init_getDaysInMonth = __esm({
  "node_modules/date-fns/getDaysInMonth.js"() {
    "use strict";
    init_constructFrom();
    init_toDate();
  }
});

// node_modules/date-fns/isLeapYear.js
var init_isLeapYear = __esm({
  "node_modules/date-fns/isLeapYear.js"() {
    "use strict";
  }
});

// node_modules/date-fns/getDaysInYear.js
var init_getDaysInYear = __esm({
  "node_modules/date-fns/getDaysInYear.js"() {
    "use strict";
  }
});

// node_modules/date-fns/getDecade.js
var init_getDecade = __esm({
  "node_modules/date-fns/getDecade.js"() {
    "use strict";
  }
});

// node_modules/date-fns/getDefaultOptions.js
var init_getDefaultOptions = __esm({
  "node_modules/date-fns/getDefaultOptions.js"() {
    "use strict";
  }
});

// node_modules/date-fns/getHours.js
function getHours(date, options) {
  return toDate(date, options?.in).getHours();
}
var init_getHours = __esm({
  "node_modules/date-fns/getHours.js"() {
    "use strict";
    init_toDate();
  }
});

// node_modules/date-fns/getISODay.js
var init_getISODay = __esm({
  "node_modules/date-fns/getISODay.js"() {
    "use strict";
  }
});

// node_modules/date-fns/getISOWeeksInYear.js
var init_getISOWeeksInYear = __esm({
  "node_modules/date-fns/getISOWeeksInYear.js"() {
    "use strict";
  }
});

// node_modules/date-fns/getMilliseconds.js
var init_getMilliseconds = __esm({
  "node_modules/date-fns/getMilliseconds.js"() {
    "use strict";
  }
});

// node_modules/date-fns/getMinutes.js
function getMinutes(date, options) {
  return toDate(date, options?.in).getMinutes();
}
var init_getMinutes = __esm({
  "node_modules/date-fns/getMinutes.js"() {
    "use strict";
    init_toDate();
  }
});

// node_modules/date-fns/getMonth.js
function getMonth(date, options) {
  return toDate(date, options?.in).getMonth();
}
var init_getMonth = __esm({
  "node_modules/date-fns/getMonth.js"() {
    "use strict";
    init_toDate();
  }
});

// node_modules/date-fns/getOverlappingDaysInIntervals.js
var init_getOverlappingDaysInIntervals = __esm({
  "node_modules/date-fns/getOverlappingDaysInIntervals.js"() {
    "use strict";
  }
});

// node_modules/date-fns/getSeconds.js
var init_getSeconds = __esm({
  "node_modules/date-fns/getSeconds.js"() {
    "use strict";
  }
});

// node_modules/date-fns/getTime.js
var init_getTime = __esm({
  "node_modules/date-fns/getTime.js"() {
    "use strict";
  }
});

// node_modules/date-fns/getUnixTime.js
var init_getUnixTime = __esm({
  "node_modules/date-fns/getUnixTime.js"() {
    "use strict";
  }
});

// node_modules/date-fns/getWeekOfMonth.js
var init_getWeekOfMonth = __esm({
  "node_modules/date-fns/getWeekOfMonth.js"() {
    "use strict";
  }
});

// node_modules/date-fns/lastDayOfMonth.js
var init_lastDayOfMonth = __esm({
  "node_modules/date-fns/lastDayOfMonth.js"() {
    "use strict";
  }
});

// node_modules/date-fns/getWeeksInMonth.js
var init_getWeeksInMonth = __esm({
  "node_modules/date-fns/getWeeksInMonth.js"() {
    "use strict";
  }
});

// node_modules/date-fns/getYear.js
function getYear(date, options) {
  return toDate(date, options?.in).getFullYear();
}
var init_getYear = __esm({
  "node_modules/date-fns/getYear.js"() {
    "use strict";
    init_toDate();
  }
});

// node_modules/date-fns/hoursToMilliseconds.js
var init_hoursToMilliseconds = __esm({
  "node_modules/date-fns/hoursToMilliseconds.js"() {
    "use strict";
  }
});

// node_modules/date-fns/hoursToMinutes.js
var init_hoursToMinutes = __esm({
  "node_modules/date-fns/hoursToMinutes.js"() {
    "use strict";
  }
});

// node_modules/date-fns/hoursToSeconds.js
var init_hoursToSeconds = __esm({
  "node_modules/date-fns/hoursToSeconds.js"() {
    "use strict";
  }
});

// node_modules/date-fns/interval.js
var init_interval = __esm({
  "node_modules/date-fns/interval.js"() {
    "use strict";
  }
});

// node_modules/date-fns/intervalToDuration.js
var init_intervalToDuration = __esm({
  "node_modules/date-fns/intervalToDuration.js"() {
    "use strict";
  }
});

// node_modules/date-fns/intlFormat.js
var init_intlFormat = __esm({
  "node_modules/date-fns/intlFormat.js"() {
    "use strict";
  }
});

// node_modules/date-fns/intlFormatDistance.js
var init_intlFormatDistance = __esm({
  "node_modules/date-fns/intlFormatDistance.js"() {
    "use strict";
  }
});

// node_modules/date-fns/isAfter.js
var init_isAfter = __esm({
  "node_modules/date-fns/isAfter.js"() {
    "use strict";
  }
});

// node_modules/date-fns/isBefore.js
var init_isBefore = __esm({
  "node_modules/date-fns/isBefore.js"() {
    "use strict";
  }
});

// node_modules/date-fns/isEqual.js
var init_isEqual = __esm({
  "node_modules/date-fns/isEqual.js"() {
    "use strict";
  }
});

// node_modules/date-fns/isExists.js
var init_isExists = __esm({
  "node_modules/date-fns/isExists.js"() {
    "use strict";
  }
});

// node_modules/date-fns/isFirstDayOfMonth.js
var init_isFirstDayOfMonth = __esm({
  "node_modules/date-fns/isFirstDayOfMonth.js"() {
    "use strict";
  }
});

// node_modules/date-fns/isFriday.js
var init_isFriday = __esm({
  "node_modules/date-fns/isFriday.js"() {
    "use strict";
  }
});

// node_modules/date-fns/isFuture.js
var init_isFuture = __esm({
  "node_modules/date-fns/isFuture.js"() {
    "use strict";
  }
});

// node_modules/date-fns/transpose.js
var init_transpose = __esm({
  "node_modules/date-fns/transpose.js"() {
    "use strict";
  }
});

// node_modules/date-fns/setWeek.js
var init_setWeek = __esm({
  "node_modules/date-fns/setWeek.js"() {
    "use strict";
  }
});

// node_modules/date-fns/setISOWeek.js
var init_setISOWeek = __esm({
  "node_modules/date-fns/setISOWeek.js"() {
    "use strict";
  }
});

// node_modules/date-fns/setDay.js
var init_setDay = __esm({
  "node_modules/date-fns/setDay.js"() {
    "use strict";
  }
});

// node_modules/date-fns/setISODay.js
var init_setISODay = __esm({
  "node_modules/date-fns/setISODay.js"() {
    "use strict";
  }
});

// node_modules/date-fns/parse.js
var init_parse = __esm({
  "node_modules/date-fns/parse.js"() {
    "use strict";
  }
});

// node_modules/date-fns/isMatch.js
var init_isMatch = __esm({
  "node_modules/date-fns/isMatch.js"() {
    "use strict";
  }
});

// node_modules/date-fns/isMonday.js
var init_isMonday = __esm({
  "node_modules/date-fns/isMonday.js"() {
    "use strict";
  }
});

// node_modules/date-fns/isPast.js
var init_isPast = __esm({
  "node_modules/date-fns/isPast.js"() {
    "use strict";
  }
});

// node_modules/date-fns/startOfHour.js
var init_startOfHour = __esm({
  "node_modules/date-fns/startOfHour.js"() {
    "use strict";
  }
});

// node_modules/date-fns/isSameHour.js
var init_isSameHour = __esm({
  "node_modules/date-fns/isSameHour.js"() {
    "use strict";
  }
});

// node_modules/date-fns/isSameWeek.js
var init_isSameWeek = __esm({
  "node_modules/date-fns/isSameWeek.js"() {
    "use strict";
  }
});

// node_modules/date-fns/isSameISOWeek.js
var init_isSameISOWeek = __esm({
  "node_modules/date-fns/isSameISOWeek.js"() {
    "use strict";
  }
});

// node_modules/date-fns/isSameISOWeekYear.js
var init_isSameISOWeekYear = __esm({
  "node_modules/date-fns/isSameISOWeekYear.js"() {
    "use strict";
  }
});

// node_modules/date-fns/startOfMinute.js
function startOfMinute(date, options) {
  const date_ = toDate(date, options?.in);
  date_.setSeconds(0, 0);
  return date_;
}
var init_startOfMinute = __esm({
  "node_modules/date-fns/startOfMinute.js"() {
    "use strict";
    init_toDate();
  }
});

// node_modules/date-fns/isSameMinute.js
var init_isSameMinute = __esm({
  "node_modules/date-fns/isSameMinute.js"() {
    "use strict";
  }
});

// node_modules/date-fns/isSameMonth.js
function isSameMonth(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  return laterDate_.getFullYear() === earlierDate_.getFullYear() && laterDate_.getMonth() === earlierDate_.getMonth();
}
var init_isSameMonth = __esm({
  "node_modules/date-fns/isSameMonth.js"() {
    "use strict";
    init_normalizeDates();
  }
});

// node_modules/date-fns/isSameQuarter.js
var init_isSameQuarter = __esm({
  "node_modules/date-fns/isSameQuarter.js"() {
    "use strict";
  }
});

// node_modules/date-fns/startOfSecond.js
function startOfSecond(date, options) {
  const date_ = toDate(date, options?.in);
  date_.setMilliseconds(0);
  return date_;
}
var init_startOfSecond = __esm({
  "node_modules/date-fns/startOfSecond.js"() {
    "use strict";
    init_toDate();
  }
});

// node_modules/date-fns/isSameSecond.js
function isSameSecond(laterDate, earlierDate) {
  return +startOfSecond(laterDate) === +startOfSecond(earlierDate);
}
var init_isSameSecond = __esm({
  "node_modules/date-fns/isSameSecond.js"() {
    "use strict";
    init_startOfSecond();
  }
});

// node_modules/date-fns/isSameYear.js
var init_isSameYear = __esm({
  "node_modules/date-fns/isSameYear.js"() {
    "use strict";
  }
});

// node_modules/date-fns/isThisHour.js
var init_isThisHour = __esm({
  "node_modules/date-fns/isThisHour.js"() {
    "use strict";
  }
});

// node_modules/date-fns/isThisISOWeek.js
var init_isThisISOWeek = __esm({
  "node_modules/date-fns/isThisISOWeek.js"() {
    "use strict";
  }
});

// node_modules/date-fns/isThisMinute.js
var init_isThisMinute = __esm({
  "node_modules/date-fns/isThisMinute.js"() {
    "use strict";
  }
});

// node_modules/date-fns/isThisMonth.js
var init_isThisMonth = __esm({
  "node_modules/date-fns/isThisMonth.js"() {
    "use strict";
  }
});

// node_modules/date-fns/isThisQuarter.js
var init_isThisQuarter = __esm({
  "node_modules/date-fns/isThisQuarter.js"() {
    "use strict";
  }
});

// node_modules/date-fns/isThisSecond.js
var init_isThisSecond = __esm({
  "node_modules/date-fns/isThisSecond.js"() {
    "use strict";
  }
});

// node_modules/date-fns/isThisWeek.js
var init_isThisWeek = __esm({
  "node_modules/date-fns/isThisWeek.js"() {
    "use strict";
  }
});

// node_modules/date-fns/isThisYear.js
var init_isThisYear = __esm({
  "node_modules/date-fns/isThisYear.js"() {
    "use strict";
  }
});

// node_modules/date-fns/isThursday.js
var init_isThursday = __esm({
  "node_modules/date-fns/isThursday.js"() {
    "use strict";
  }
});

// node_modules/date-fns/isToday.js
var init_isToday = __esm({
  "node_modules/date-fns/isToday.js"() {
    "use strict";
  }
});

// node_modules/date-fns/isTomorrow.js
var init_isTomorrow = __esm({
  "node_modules/date-fns/isTomorrow.js"() {
    "use strict";
  }
});

// node_modules/date-fns/isTuesday.js
var init_isTuesday = __esm({
  "node_modules/date-fns/isTuesday.js"() {
    "use strict";
  }
});

// node_modules/date-fns/isWednesday.js
var init_isWednesday = __esm({
  "node_modules/date-fns/isWednesday.js"() {
    "use strict";
  }
});

// node_modules/date-fns/isWithinInterval.js
var init_isWithinInterval = __esm({
  "node_modules/date-fns/isWithinInterval.js"() {
    "use strict";
  }
});

// node_modules/date-fns/subDays.js
function subDays(date, amount, options) {
  return addDays(date, -amount, options);
}
var init_subDays = __esm({
  "node_modules/date-fns/subDays.js"() {
    "use strict";
    init_addDays();
  }
});

// node_modules/date-fns/isYesterday.js
var init_isYesterday = __esm({
  "node_modules/date-fns/isYesterday.js"() {
    "use strict";
  }
});

// node_modules/date-fns/lastDayOfDecade.js
var init_lastDayOfDecade = __esm({
  "node_modules/date-fns/lastDayOfDecade.js"() {
    "use strict";
  }
});

// node_modules/date-fns/lastDayOfWeek.js
var init_lastDayOfWeek = __esm({
  "node_modules/date-fns/lastDayOfWeek.js"() {
    "use strict";
  }
});

// node_modules/date-fns/lastDayOfISOWeek.js
var init_lastDayOfISOWeek = __esm({
  "node_modules/date-fns/lastDayOfISOWeek.js"() {
    "use strict";
  }
});

// node_modules/date-fns/lastDayOfISOWeekYear.js
var init_lastDayOfISOWeekYear = __esm({
  "node_modules/date-fns/lastDayOfISOWeekYear.js"() {
    "use strict";
  }
});

// node_modules/date-fns/lastDayOfQuarter.js
var init_lastDayOfQuarter = __esm({
  "node_modules/date-fns/lastDayOfQuarter.js"() {
    "use strict";
  }
});

// node_modules/date-fns/lastDayOfYear.js
var init_lastDayOfYear = __esm({
  "node_modules/date-fns/lastDayOfYear.js"() {
    "use strict";
  }
});

// node_modules/date-fns/lightFormat.js
var init_lightFormat = __esm({
  "node_modules/date-fns/lightFormat.js"() {
    "use strict";
  }
});

// node_modules/date-fns/milliseconds.js
var init_milliseconds = __esm({
  "node_modules/date-fns/milliseconds.js"() {
    "use strict";
  }
});

// node_modules/date-fns/millisecondsToHours.js
var init_millisecondsToHours = __esm({
  "node_modules/date-fns/millisecondsToHours.js"() {
    "use strict";
  }
});

// node_modules/date-fns/millisecondsToMinutes.js
var init_millisecondsToMinutes = __esm({
  "node_modules/date-fns/millisecondsToMinutes.js"() {
    "use strict";
  }
});

// node_modules/date-fns/millisecondsToSeconds.js
var init_millisecondsToSeconds = __esm({
  "node_modules/date-fns/millisecondsToSeconds.js"() {
    "use strict";
  }
});

// node_modules/date-fns/minutesToHours.js
var init_minutesToHours = __esm({
  "node_modules/date-fns/minutesToHours.js"() {
    "use strict";
  }
});

// node_modules/date-fns/minutesToMilliseconds.js
var init_minutesToMilliseconds = __esm({
  "node_modules/date-fns/minutesToMilliseconds.js"() {
    "use strict";
  }
});

// node_modules/date-fns/minutesToSeconds.js
var init_minutesToSeconds = __esm({
  "node_modules/date-fns/minutesToSeconds.js"() {
    "use strict";
  }
});

// node_modules/date-fns/monthsToQuarters.js
var init_monthsToQuarters = __esm({
  "node_modules/date-fns/monthsToQuarters.js"() {
    "use strict";
  }
});

// node_modules/date-fns/monthsToYears.js
var init_monthsToYears = __esm({
  "node_modules/date-fns/monthsToYears.js"() {
    "use strict";
  }
});

// node_modules/date-fns/nextDay.js
var init_nextDay = __esm({
  "node_modules/date-fns/nextDay.js"() {
    "use strict";
  }
});

// node_modules/date-fns/nextFriday.js
var init_nextFriday = __esm({
  "node_modules/date-fns/nextFriday.js"() {
    "use strict";
  }
});

// node_modules/date-fns/nextMonday.js
var init_nextMonday = __esm({
  "node_modules/date-fns/nextMonday.js"() {
    "use strict";
  }
});

// node_modules/date-fns/nextSaturday.js
var init_nextSaturday = __esm({
  "node_modules/date-fns/nextSaturday.js"() {
    "use strict";
  }
});

// node_modules/date-fns/nextSunday.js
var init_nextSunday = __esm({
  "node_modules/date-fns/nextSunday.js"() {
    "use strict";
  }
});

// node_modules/date-fns/nextThursday.js
var init_nextThursday = __esm({
  "node_modules/date-fns/nextThursday.js"() {
    "use strict";
  }
});

// node_modules/date-fns/nextTuesday.js
var init_nextTuesday = __esm({
  "node_modules/date-fns/nextTuesday.js"() {
    "use strict";
  }
});

// node_modules/date-fns/nextWednesday.js
var init_nextWednesday = __esm({
  "node_modules/date-fns/nextWednesday.js"() {
    "use strict";
  }
});

// node_modules/date-fns/parseISO.js
var init_parseISO = __esm({
  "node_modules/date-fns/parseISO.js"() {
    "use strict";
  }
});

// node_modules/date-fns/parseJSON.js
var init_parseJSON = __esm({
  "node_modules/date-fns/parseJSON.js"() {
    "use strict";
  }
});

// node_modules/date-fns/previousDay.js
var init_previousDay = __esm({
  "node_modules/date-fns/previousDay.js"() {
    "use strict";
  }
});

// node_modules/date-fns/previousFriday.js
var init_previousFriday = __esm({
  "node_modules/date-fns/previousFriday.js"() {
    "use strict";
  }
});

// node_modules/date-fns/previousMonday.js
var init_previousMonday = __esm({
  "node_modules/date-fns/previousMonday.js"() {
    "use strict";
  }
});

// node_modules/date-fns/previousSaturday.js
var init_previousSaturday = __esm({
  "node_modules/date-fns/previousSaturday.js"() {
    "use strict";
  }
});

// node_modules/date-fns/previousSunday.js
var init_previousSunday = __esm({
  "node_modules/date-fns/previousSunday.js"() {
    "use strict";
  }
});

// node_modules/date-fns/previousThursday.js
var init_previousThursday = __esm({
  "node_modules/date-fns/previousThursday.js"() {
    "use strict";
  }
});

// node_modules/date-fns/previousTuesday.js
var init_previousTuesday = __esm({
  "node_modules/date-fns/previousTuesday.js"() {
    "use strict";
  }
});

// node_modules/date-fns/previousWednesday.js
var init_previousWednesday = __esm({
  "node_modules/date-fns/previousWednesday.js"() {
    "use strict";
  }
});

// node_modules/date-fns/quartersToMonths.js
var init_quartersToMonths = __esm({
  "node_modules/date-fns/quartersToMonths.js"() {
    "use strict";
  }
});

// node_modules/date-fns/quartersToYears.js
var init_quartersToYears = __esm({
  "node_modules/date-fns/quartersToYears.js"() {
    "use strict";
  }
});

// node_modules/date-fns/roundToNearestHours.js
var init_roundToNearestHours = __esm({
  "node_modules/date-fns/roundToNearestHours.js"() {
    "use strict";
  }
});

// node_modules/date-fns/roundToNearestMinutes.js
var init_roundToNearestMinutes = __esm({
  "node_modules/date-fns/roundToNearestMinutes.js"() {
    "use strict";
  }
});

// node_modules/date-fns/secondsToHours.js
var init_secondsToHours = __esm({
  "node_modules/date-fns/secondsToHours.js"() {
    "use strict";
  }
});

// node_modules/date-fns/secondsToMilliseconds.js
var init_secondsToMilliseconds = __esm({
  "node_modules/date-fns/secondsToMilliseconds.js"() {
    "use strict";
  }
});

// node_modules/date-fns/secondsToMinutes.js
var init_secondsToMinutes = __esm({
  "node_modules/date-fns/secondsToMinutes.js"() {
    "use strict";
  }
});

// node_modules/date-fns/setMonth.js
function setMonth(date, month, options) {
  const _date = toDate(date, options?.in);
  const year = _date.getFullYear();
  const day = _date.getDate();
  const midMonth = constructFrom(options?.in || date, 0);
  midMonth.setFullYear(year, month, 15);
  midMonth.setHours(0, 0, 0, 0);
  const daysInMonth = getDaysInMonth(midMonth);
  _date.setMonth(month, Math.min(day, daysInMonth));
  return _date;
}
var init_setMonth = __esm({
  "node_modules/date-fns/setMonth.js"() {
    "use strict";
    init_constructFrom();
    init_getDaysInMonth();
    init_toDate();
  }
});

// node_modules/date-fns/set.js
var init_set = __esm({
  "node_modules/date-fns/set.js"() {
    "use strict";
  }
});

// node_modules/date-fns/setDate.js
function setDate(date, dayOfMonth, options) {
  const _date = toDate(date, options?.in);
  _date.setDate(dayOfMonth);
  return _date;
}
var init_setDate = __esm({
  "node_modules/date-fns/setDate.js"() {
    "use strict";
    init_toDate();
  }
});

// node_modules/date-fns/setDayOfYear.js
var init_setDayOfYear = __esm({
  "node_modules/date-fns/setDayOfYear.js"() {
    "use strict";
  }
});

// node_modules/date-fns/setDefaultOptions.js
var init_setDefaultOptions = __esm({
  "node_modules/date-fns/setDefaultOptions.js"() {
    "use strict";
  }
});

// node_modules/date-fns/setHours.js
function setHours(date, hours, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(hours);
  return _date;
}
var init_setHours = __esm({
  "node_modules/date-fns/setHours.js"() {
    "use strict";
    init_toDate();
  }
});

// node_modules/date-fns/setMilliseconds.js
var init_setMilliseconds = __esm({
  "node_modules/date-fns/setMilliseconds.js"() {
    "use strict";
  }
});

// node_modules/date-fns/setMinutes.js
function setMinutes(date, minutes, options) {
  const date_ = toDate(date, options?.in);
  date_.setMinutes(minutes);
  return date_;
}
var init_setMinutes = __esm({
  "node_modules/date-fns/setMinutes.js"() {
    "use strict";
    init_toDate();
  }
});

// node_modules/date-fns/setQuarter.js
var init_setQuarter = __esm({
  "node_modules/date-fns/setQuarter.js"() {
    "use strict";
  }
});

// node_modules/date-fns/setSeconds.js
var init_setSeconds = __esm({
  "node_modules/date-fns/setSeconds.js"() {
    "use strict";
  }
});

// node_modules/date-fns/setWeekYear.js
var init_setWeekYear = __esm({
  "node_modules/date-fns/setWeekYear.js"() {
    "use strict";
  }
});

// node_modules/date-fns/setYear.js
function setYear(date, year, options) {
  const date_ = toDate(date, options?.in);
  if (isNaN(+date_)) return constructFrom(options?.in || date, NaN);
  date_.setFullYear(year);
  return date_;
}
var init_setYear = __esm({
  "node_modules/date-fns/setYear.js"() {
    "use strict";
    init_constructFrom();
    init_toDate();
  }
});

// node_modules/date-fns/startOfDecade.js
var init_startOfDecade = __esm({
  "node_modules/date-fns/startOfDecade.js"() {
    "use strict";
  }
});

// node_modules/date-fns/startOfToday.js
var init_startOfToday = __esm({
  "node_modules/date-fns/startOfToday.js"() {
    "use strict";
  }
});

// node_modules/date-fns/startOfTomorrow.js
var init_startOfTomorrow = __esm({
  "node_modules/date-fns/startOfTomorrow.js"() {
    "use strict";
  }
});

// node_modules/date-fns/startOfYesterday.js
var init_startOfYesterday = __esm({
  "node_modules/date-fns/startOfYesterday.js"() {
    "use strict";
  }
});

// node_modules/date-fns/subMonths.js
function subMonths(date, amount, options) {
  return addMonths(date, -amount, options);
}
var init_subMonths = __esm({
  "node_modules/date-fns/subMonths.js"() {
    "use strict";
    init_addMonths();
  }
});

// node_modules/date-fns/sub.js
var init_sub = __esm({
  "node_modules/date-fns/sub.js"() {
    "use strict";
  }
});

// node_modules/date-fns/subBusinessDays.js
var init_subBusinessDays = __esm({
  "node_modules/date-fns/subBusinessDays.js"() {
    "use strict";
  }
});

// node_modules/date-fns/subHours.js
var init_subHours = __esm({
  "node_modules/date-fns/subHours.js"() {
    "use strict";
  }
});

// node_modules/date-fns/subMilliseconds.js
var init_subMilliseconds = __esm({
  "node_modules/date-fns/subMilliseconds.js"() {
    "use strict";
  }
});

// node_modules/date-fns/subMinutes.js
var init_subMinutes = __esm({
  "node_modules/date-fns/subMinutes.js"() {
    "use strict";
  }
});

// node_modules/date-fns/subQuarters.js
var init_subQuarters = __esm({
  "node_modules/date-fns/subQuarters.js"() {
    "use strict";
  }
});

// node_modules/date-fns/subSeconds.js
var init_subSeconds = __esm({
  "node_modules/date-fns/subSeconds.js"() {
    "use strict";
  }
});

// node_modules/date-fns/subWeeks.js
function subWeeks(date, amount, options) {
  return addWeeks(date, -amount, options);
}
var init_subWeeks = __esm({
  "node_modules/date-fns/subWeeks.js"() {
    "use strict";
    init_addWeeks();
  }
});

// node_modules/date-fns/subYears.js
var init_subYears = __esm({
  "node_modules/date-fns/subYears.js"() {
    "use strict";
  }
});

// node_modules/date-fns/weeksToDays.js
var init_weeksToDays = __esm({
  "node_modules/date-fns/weeksToDays.js"() {
    "use strict";
  }
});

// node_modules/date-fns/yearsToDays.js
var init_yearsToDays = __esm({
  "node_modules/date-fns/yearsToDays.js"() {
    "use strict";
  }
});

// node_modules/date-fns/yearsToMonths.js
var init_yearsToMonths = __esm({
  "node_modules/date-fns/yearsToMonths.js"() {
    "use strict";
  }
});

// node_modules/date-fns/yearsToQuarters.js
var init_yearsToQuarters = __esm({
  "node_modules/date-fns/yearsToQuarters.js"() {
    "use strict";
  }
});

// node_modules/date-fns/index.js
var init_date_fns = __esm({
  "node_modules/date-fns/index.js"() {
    "use strict";
    init_add();
    init_addBusinessDays();
    init_addDays();
    init_addHours();
    init_addISOWeekYears();
    init_addMilliseconds();
    init_addMinutes();
    init_addMonths();
    init_addQuarters();
    init_addSeconds();
    init_addWeeks();
    init_addYears();
    init_areIntervalsOverlapping();
    init_clamp();
    init_closestIndexTo();
    init_closestTo();
    init_compareAsc();
    init_compareDesc();
    init_constructFrom();
    init_constructNow();
    init_daysToWeeks();
    init_differenceInBusinessDays();
    init_differenceInCalendarDays();
    init_differenceInCalendarISOWeekYears();
    init_differenceInCalendarISOWeeks();
    init_differenceInCalendarMonths();
    init_differenceInCalendarQuarters();
    init_differenceInCalendarWeeks();
    init_differenceInCalendarYears();
    init_differenceInDays();
    init_differenceInHours();
    init_differenceInISOWeekYears();
    init_differenceInMilliseconds();
    init_differenceInMinutes();
    init_differenceInMonths();
    init_differenceInQuarters();
    init_differenceInSeconds();
    init_differenceInWeeks();
    init_differenceInYears();
    init_eachDayOfInterval();
    init_eachHourOfInterval();
    init_eachMinuteOfInterval();
    init_eachMonthOfInterval();
    init_eachQuarterOfInterval();
    init_eachWeekOfInterval();
    init_eachWeekendOfInterval();
    init_eachWeekendOfMonth();
    init_eachWeekendOfYear();
    init_eachYearOfInterval();
    init_endOfDay();
    init_endOfDecade();
    init_endOfHour();
    init_endOfISOWeek();
    init_endOfISOWeekYear();
    init_endOfMinute();
    init_endOfMonth();
    init_endOfQuarter();
    init_endOfSecond();
    init_endOfToday();
    init_endOfTomorrow();
    init_endOfWeek();
    init_endOfYear();
    init_endOfYesterday();
    init_format();
    init_formatDistance();
    init_formatDistanceStrict();
    init_formatDistanceToNow();
    init_formatDistanceToNowStrict();
    init_formatDuration();
    init_formatISO();
    init_formatISO9075();
    init_formatISODuration();
    init_formatRFC3339();
    init_formatRFC7231();
    init_formatRelative();
    init_fromUnixTime();
    init_getDate();
    init_getDay();
    init_getDayOfYear();
    init_getDaysInMonth();
    init_getDaysInYear();
    init_getDecade();
    init_getDefaultOptions();
    init_getHours();
    init_getISODay();
    init_getISOWeek();
    init_getISOWeekYear();
    init_getISOWeeksInYear();
    init_getMilliseconds();
    init_getMinutes();
    init_getMonth();
    init_getOverlappingDaysInIntervals();
    init_getQuarter();
    init_getSeconds();
    init_getTime();
    init_getUnixTime();
    init_getWeek();
    init_getWeekOfMonth();
    init_getWeekYear();
    init_getWeeksInMonth();
    init_getYear();
    init_hoursToMilliseconds();
    init_hoursToMinutes();
    init_hoursToSeconds();
    init_interval();
    init_intervalToDuration();
    init_intlFormat();
    init_intlFormatDistance();
    init_isAfter();
    init_isBefore();
    init_isDate();
    init_isEqual();
    init_isExists();
    init_isFirstDayOfMonth();
    init_isFriday();
    init_isFuture();
    init_isLastDayOfMonth();
    init_isLeapYear();
    init_isMatch();
    init_isMonday();
    init_isPast();
    init_isSameDay();
    init_isSameHour();
    init_isSameISOWeek();
    init_isSameISOWeekYear();
    init_isSameMinute();
    init_isSameMonth();
    init_isSameQuarter();
    init_isSameSecond();
    init_isSameWeek();
    init_isSameYear();
    init_isSaturday();
    init_isSunday();
    init_isThisHour();
    init_isThisISOWeek();
    init_isThisMinute();
    init_isThisMonth();
    init_isThisQuarter();
    init_isThisSecond();
    init_isThisWeek();
    init_isThisYear();
    init_isThursday();
    init_isToday();
    init_isTomorrow();
    init_isTuesday();
    init_isValid();
    init_isWednesday();
    init_isWeekend();
    init_isWithinInterval();
    init_isYesterday();
    init_lastDayOfDecade();
    init_lastDayOfISOWeek();
    init_lastDayOfISOWeekYear();
    init_lastDayOfMonth();
    init_lastDayOfQuarter();
    init_lastDayOfWeek();
    init_lastDayOfYear();
    init_lightFormat();
    init_max();
    init_milliseconds();
    init_millisecondsToHours();
    init_millisecondsToMinutes();
    init_millisecondsToSeconds();
    init_min();
    init_minutesToHours();
    init_minutesToMilliseconds();
    init_minutesToSeconds();
    init_monthsToQuarters();
    init_monthsToYears();
    init_nextDay();
    init_nextFriday();
    init_nextMonday();
    init_nextSaturday();
    init_nextSunday();
    init_nextThursday();
    init_nextTuesday();
    init_nextWednesday();
    init_parse();
    init_parseISO();
    init_parseJSON();
    init_previousDay();
    init_previousFriday();
    init_previousMonday();
    init_previousSaturday();
    init_previousSunday();
    init_previousThursday();
    init_previousTuesday();
    init_previousWednesday();
    init_quartersToMonths();
    init_quartersToYears();
    init_roundToNearestHours();
    init_roundToNearestMinutes();
    init_secondsToHours();
    init_secondsToMilliseconds();
    init_secondsToMinutes();
    init_set();
    init_setDate();
    init_setDay();
    init_setDayOfYear();
    init_setDefaultOptions();
    init_setHours();
    init_setISODay();
    init_setISOWeek();
    init_setISOWeekYear();
    init_setMilliseconds();
    init_setMinutes();
    init_setMonth();
    init_setQuarter();
    init_setSeconds();
    init_setWeek();
    init_setWeekYear();
    init_setYear();
    init_startOfDay();
    init_startOfDecade();
    init_startOfHour();
    init_startOfISOWeek();
    init_startOfISOWeekYear();
    init_startOfMinute();
    init_startOfMonth();
    init_startOfQuarter();
    init_startOfSecond();
    init_startOfToday();
    init_startOfTomorrow();
    init_startOfWeek();
    init_startOfWeekYear();
    init_startOfYear();
    init_startOfYesterday();
    init_sub();
    init_subBusinessDays();
    init_subDays();
    init_subHours();
    init_subISOWeekYears();
    init_subMilliseconds();
    init_subMinutes();
    init_subMonths();
    init_subQuarters();
    init_subSeconds();
    init_subWeeks();
    init_subYears();
    init_toDate();
    init_transpose();
    init_weeksToDays();
    init_yearsToDays();
    init_yearsToMonths();
    init_yearsToQuarters();
  }
});

// node_modules/calendar-utils/date-adapters/esm/date-fns/index.js
function getTimezoneOffset(date) {
  return new Date(date).getTimezoneOffset();
}
function adapterFactory() {
  return {
    addDays,
    addHours,
    addMinutes,
    addSeconds,
    differenceInDays,
    differenceInMinutes,
    differenceInSeconds,
    endOfDay,
    endOfMonth,
    endOfWeek,
    getDay,
    getMonth,
    isSameDay,
    isSameMonth,
    isSameSecond,
    max,
    setHours,
    setMinutes,
    startOfDay,
    startOfMinute,
    startOfMonth,
    startOfWeek,
    getHours,
    getMinutes,
    getTimezoneOffset
  };
}
var init_date_fns2 = __esm({
  "node_modules/calendar-utils/date-adapters/esm/date-fns/index.js"() {
    "use strict";
    init_date_fns();
  }
});

// node_modules/angular-calendar/date-adapters/esm/date-fns/index.js
function adapterFactory2() {
  return Object.assign(Object.assign({}, adapterFactory()), {
    addWeeks,
    addMonths,
    subDays,
    subWeeks,
    subMonths,
    getISOWeek,
    setDate,
    setMonth,
    setYear,
    getDate,
    getYear
  });
}
var init_date_fns3 = __esm({
  "node_modules/angular-calendar/date-adapters/esm/date-fns/index.js"() {
    "use strict";
    init_date_fns2();
    init_date_fns();
  }
});

export {
  DateAdapter,
  CalendarDateFormatter,
  CalendarUtils,
  CalendarNativeDateFormatter,
  init_angular_calendar,
  CalendarWidget,
  init_calendar_widget,
  adapterFactory2 as adapterFactory,
  init_date_fns3 as init_date_fns
};
//# sourceMappingURL=chunk-BV7G6RXL.js.map
