/**
 * @since 2.0.0
 */
import { HKT, Kind, Kind2, Kind3, Kind4, URIS, URIS2, URIS3, URIS4 } from './HKT'
import { Monad, Monad1, Monad2, Monad2C, Monad3, Monad3C } from './Monad'
import { Monoid } from './Monoid'

/**
 * @category type classes
 * @since 2.0.0
 */
export interface Foldable<F> {
  readonly URI: F
  readonly reduce: <A, B>(fa: HKT<F, A>, b: B, f: (b: B, a: A) => B) => B
  readonly foldMap: <M>(M: Monoid<M>) => <A>(fa: HKT<F, A>, f: (a: A) => M) => M
  readonly reduceRight: <A, B>(fa: HKT<F, A>, b: B, f: (a: A, b: B) => B) => B
}

/**
 * @category type classes
 * @since 2.0.0
 */
export interface Foldable1<F extends URIS> {
  readonly URI: F
  readonly reduce: <A, B>(fa: Kind<F, A>, b: B, f: (b: B, a: A) => B) => B
  readonly foldMap: <M>(M: Monoid<M>) => <A>(fa: Kind<F, A>, f: (a: A) => M) => M
  readonly reduceRight: <A, B>(fa: Kind<F, A>, b: B, f: (a: A, b: B) => B) => B
}

/**
 * @category type classes
 * @since 2.0.0
 */
export interface Foldable2<F extends URIS2> {
  readonly URI: F
  readonly reduce: <E, A, B>(fa: Kind2<F, E, A>, b: B, f: (b: B, a: A) => B) => B
  readonly foldMap: <M>(M: Monoid<M>) => <E, A>(fa: Kind2<F, E, A>, f: (a: A) => M) => M
  readonly reduceRight: <E, A, B>(fa: Kind2<F, E, A>, b: B, f: (a: A, b: B) => B) => B
}

/**
 * @category type classes
 * @since 2.0.0
 */
export interface Foldable2C<F extends URIS2, E> {
  readonly URI: F
  readonly _E: E
  readonly reduce: <A, B>(fa: Kind2<F, E, A>, b: B, f: (b: B, a: A) => B) => B
  readonly foldMap: <M>(M: Monoid<M>) => <A>(fa: Kind2<F, E, A>, f: (a: A) => M) => M
  readonly reduceRight: <A, B>(fa: Kind2<F, E, A>, b: B, f: (a: A, b: B) => B) => B
}

/**
 * @category type classes
 * @since 2.0.0
 */
export interface Foldable3<F extends URIS3> {
  readonly URI: F
  readonly reduce: <R, E, A, B>(fa: Kind3<F, R, E, A>, b: B, f: (b: B, a: A) => B) => B
  readonly foldMap: <M>(M: Monoid<M>) => <R, E, A>(fa: Kind3<F, R, E, A>, f: (a: A) => M) => M
  readonly reduceRight: <R, E, A, B>(fa: Kind3<F, R, E, A>, b: B, f: (a: A, b: B) => B) => B
}

/**
 * @category type classes
 * @since 2.2.0
 */
export interface Foldable3C<F extends URIS3, E> {
  readonly URI: F
  readonly _E: E
  readonly reduce: <R, A, B>(fa: Kind3<F, R, E, A>, b: B, f: (b: B, a: A) => B) => B
  readonly foldMap: <M>(M: Monoid<M>) => <R, A>(fa: Kind3<F, R, E, A>, f: (a: A) => M) => M
  readonly reduceRight: <R, A, B>(fa: Kind3<F, R, E, A>, b: B, f: (a: A, b: B) => B) => B
}

/**
 * @category type classes
 * @since 2.0.0
 */
export interface Foldable4<F extends URIS4> {
  readonly URI: F
  readonly reduce: <S, R, E, A, B>(fa: Kind4<F, S, R, E, A>, b: B, f: (b: B, a: A) => B) => B
  readonly foldMap: <M>(M: Monoid<M>) => <S, R, E, A>(fa: Kind4<F, S, R, E, A>, f: (a: A) => M) => M
  readonly reduceRight: <S, R, E, A, B>(fa: Kind4<F, S, R, E, A>, b: B, f: (a: A, b: B) => B) => B
}

/**
 * Similar to 'reduce', but the result is encapsulated in a monad.
 *
 * Note: this function is not generally stack-safe, e.g., for monads which build up thunks a la `IO`.
 *
 * @example
 * import { reduceM } from 'fp-ts/lib/Foldable'
 * import { option, some } from 'fp-ts/lib/Option'
 * import { make, tree } from 'fp-ts/lib/Tree'
 *
 * const t = make(1, [make(2, []), make(3, []), make(4, [])])
 * assert.deepStrictEqual(reduceM(option, tree)(t, 0, (b, a) => (a > 2 ? some(b + a) : some(b))), some(7))
 *
 * @since 2.0.0
 */
export function reduceM<M extends URIS3, F extends URIS>(
  M: Monad3<M>,
  F: Foldable1<F>
): <R, E, A, B>(fa: Kind<F, A>, b: B, f: (b: B, a: A) => Kind3<M, R, E, B>) => Kind3<M, R, E, B>
export function reduceM<M extends URIS3, F extends URIS, E>(
  M: Monad3C<M, E>,
  F: Foldable1<F>
): <R, A, B>(fa: Kind<F, A>, b: B, f: (b: B, a: A) => Kind3<M, R, E, B>) => Kind3<M, R, E, B>
export function reduceM<M extends URIS2, F extends URIS>(
  M: Monad2<M>,
  F: Foldable1<F>
): <E, A, B>(fa: Kind<F, A>, b: B, f: (b: B, a: A) => Kind2<M, E, B>) => Kind2<M, E, B>
export function reduceM<M extends URIS2, F extends URIS, E>(
  M: Monad2C<M, E>,
  F: Foldable1<F>
): <A, B>(fa: Kind<F, A>, b: B, f: (b: B, a: A) => Kind2<M, E, B>) => Kind2<M, E, B>
export function reduceM<M extends URIS, F extends URIS>(
  M: Monad1<M>,
  F: Foldable1<F>
): <A, B>(fa: Kind<F, A>, b: B, f: (b: B, a: A) => Kind<M, B>) => Kind<M, B>
export function reduceM<M, F>(
  M: Monad<M>,
  F: Foldable<F>
): <A, B>(fa: HKT<F, A>, b: B, f: (b: B, a: A) => HKT<M, B>) => HKT<M, B>
export function reduceM<M, F>(
  M: Monad<M>,
  F: Foldable<F>
): <A, B>(fa: HKT<F, A>, b: B, f: (b: B, a: A) => HKT<M, B>) => HKT<M, B> {
  return (fa, b, f) => F.reduce(fa, M.of(b), (mb, a) => M.chain(mb, (b) => f(b, a)))
}

/**
 * Fold a data structure, accumulating values in some `Monoid`, combining adjacent elements using the specified separator
 *
 * @example
 * import { intercalate } from 'fp-ts/lib/Foldable'
 * import { monoidString } from 'fp-ts/lib/Monoid'
 * import { make, tree } from 'fp-ts/lib/Tree'
 *
 * const t = make('a', [make('b', []), make('c', []), make('d', [])])
 * assert.strictEqual(intercalate(monoidString, tree)('|', t), 'a|b|c|d')
 *
 * @since 2.0.0
 */
export function intercalate<M, F extends URIS3>(
  M: Monoid<M>,
  F: Foldable3<F>
): <R, E>(sep: M, fm: Kind3<F, R, E, M>) => M
export function intercalate<M, F extends URIS2>(M: Monoid<M>, F: Foldable2<F>): <E>(sep: M, fm: Kind2<F, E, M>) => M
export function intercalate<M, F extends URIS2, E>(M: Monoid<M>, F: Foldable2C<F, E>): (sep: M, fm: Kind2<F, E, M>) => M
export function intercalate<M, F extends URIS>(M: Monoid<M>, F: Foldable1<F>): (sep: M, fm: Kind<F, M>) => M
export function intercalate<M, F>(M: Monoid<M>, F: Foldable<F>): (sep: M, fm: HKT<F, M>) => M
export function intercalate<M, F>(M: Monoid<M>, F: Foldable<F>): (sep: M, fm: HKT<F, M>) => M {
  interface Acc<M> {
    readonly init: boolean
    readonly acc: M
  }
  return (sep, fm) => {
    const go = ({ init, acc }: Acc<M>, x: M): Acc<M> =>
      init ? { init: false, acc: x } : { init: false, acc: M.concat(M.concat(acc, sep), x) }
    return F.reduce(fm, { init: true, acc: M.empty }, go).acc
  }
}
